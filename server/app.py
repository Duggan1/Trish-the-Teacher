from flask import make_response, redirect, request, session, jsonify
from flask_restful import Resource
from flask import Flask
from flask_cors import CORS

from config import app, db, api
from models import *
from models import Session

from flask_bcrypt import Bcrypt
import stripe


# stripe.api_key = 'sk_test_51N3lYDBSH1u53ZPgCNTC7ErmGHo1DHTIl1TMIAHXZEzwwWQaFaSw3nKBiTAjtjc3TUFarB0kbkw4uY3Pi4qR65r900jIuOQWkR'

app = Flask(__name__)
CORS(app)

bcrypt = Bcrypt(app)
# Enable CORS

# app = Flask(__name__,
#             static_url_path='',
#             static_folder='public')


YOUR_DOMAIN = 'http://localhost:5555'


class Users(Resource):
    def get(self):
        users = User.query.all()
        return make_response(
            [user.to_dict() for user in users],
            200
        )
api.add_resource(Users, '/users')

class Sessions(Resource):
    def get(self):
        Sessions = Session.query.all()
        return make_response(
            [Session.to_dict() for Session in Sessions],
            200
        )
api.add_resource(Sessions, '/sessions')



class UserById(Resource):




    def get(self, id):
        user = User.query.filter_by(id = id).first()
        if user == None:
            return make_response({"error":"user not found"}, 404)
        return make_response(user.to_dict(), 200)
    
    def delete(self, id):
        if not session['user_id']:
            return {'error': 'Unauthorized'}, 401
        
        user = User.query.filter_by(id = id).first()
        if user == None:
            return make_response({"error":"user not found"}, 404)
        db.session.delete(user)
        db.session.commit()
        return make_response({"deleted": "she gone"}, 204)
    
    def patch(self, id):
        if not session['user_id']:
            return {'error': 'Unauthorized'}, 401
        user = User.query.filter_by(id = id).first()
        data = request.get_json()
        for attr in data:
            setattr(user, attr, data[attr])
        db.session.add(user)
        db.session.commit()
        return make_response(user.to_dict(), 201)
    
api.add_resource(UserById, "/user/<int:id>")




class SignUp(Resource):
    def post(self):
        data = request.json
        username = data['username']
        password = data['password']
        email = data['email']
        phone = data['phone']
        age = data['age']
        school = data['school']
        best_subject = data['bestSubject']
        worst_subject = data['worstSubject']
        fullname = data['fullname']

        user_exists = User.query.filter_by(username=username).first() is not None

        if user_exists:
            return jsonify({"error": "User already exists"}), 409

        hashed_password = bcrypt.generate_password_hash(password)
        
        try:
            new_user = User(
                _password_hash=hashed_password,
                username=username,
                email=email,
                phone=phone,
                age=age,
                school=school,
                bestSubject=best_subject,
                worstSubject=worst_subject,
                fullname=fullname
            )
        except ValueError:
            return make_response({"error": "Invalid input data"}, 400)

        db.session.add(new_user)
        db.session.commit()
        session['user_id'] = new_user.id

        return jsonify({
            "id": new_user.id,
            "username": new_user.username,
            "email": new_user.email,
            "phone": new_user.phone,
            "age": new_user.age,
            "school": new_user.school,
            "bestSubject": new_user.bestSubject,
            "worstSubject": new_user.worstSubject,
            "fullname": new_user.fullname
        })



class Login(Resource):
    def post(self):
        data = request.get_json()
        user = User.query.filter(
            User.username == data['username']
        ).first()

        password = data['_password']
        if not user:
            return {'error': 'Must enter a valid username and password'}, 404

        
        elif user.authenticate(password):
            session['user_id'] = user.id
            
            return make_response(
                user.to_dict(),
                200
            )
        return {'error': 'Must enter a valid username and password'}, 404



class CheckSession(Resource):

    def get(self):
        user = User.query.filter(User.id == session.get('user_id')).first()
        if user:
            return user.to_dict()
        else:
            return {'message': '401: Not Authorized'}, 401



class Logout(Resource):

   

    def delete(self): # just add this line!
        session['user_id'] = None
        return {'message': '204: No Content'}, 204




api.add_resource(SignUp, '/signup', endpoint='signup')
api.add_resource(Login, '/login', endpoint='login')
api.add_resource(Logout, '/logout', endpoint='logout')
api.add_resource(CheckSession, '/check_session', endpoint='check_session')

# @app.route('/stripe_payment', methods=['POST'])
# def stripe_payment():
#     data = request.get_json()

#     payment_method = stripe.PaymentMethod.create(
#         type='card',
#         card={
#             'number': data['cardNumber'],
#             'exp_month': data['expMonth'],
#             'exp_year': data['expYear'],
#             'cvc': data['cvc']
#         }
#     )

#     charge = stripe.Charge.create(
#         payment_method=payment_method.id,
#         amount=data['amount'],
#         currency='usd',
#         description='Example charge'
#     )

#     return jsonify(charge)




if __name__ == '__main__':
    app.run(port=5555, debug=True)

