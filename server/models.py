from flask_sqlalchemy import SQLAlchemy
from flask_restful import Api, Resource
from sqlalchemy import MetaData
from sqlalchemy.orm import validates
from sqlalchemy.ext.associationproxy import association_proxy
from sqlalchemy_serializer import SerializerMixin
from sqlalchemy.ext.hybrid import hybrid_property


from config import db, bcrypt
# metadata = MetaData(naming_convention={
#     "fk": "fk_%(table_name)s_%(column_0_name)s_%(referred_table_name)s",
#     "uq": "uq_%(table_name)s_%(column_0_name)s",
#     "ck": "ck_%(table_name)s_%(constraint_name)s",
#     "fk": "fk_%(table_name)s_%(column_0_name)s_%(referred_table_name)s",
# })

# db = SQLAlchemy(metadata=metadata)

class User(db.Model, SerializerMixin):
    __tablename__ = 'users'
    serialize_rules= ("-created_at", "-updated_at","-_password_hash")

    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String, unique=True)
    _password_hash = db.Column(db.String,nullable=False)
    fullname = db.Column(db.String, unique=True)
    age = db.Column(db.Integer,nullable=False)
    school = db.Column(db.String, unique=True)
    bestSubject = db.Column(db.String, nullable=False)
    worstSubject = db.Column(db.String, nullable=False)
    email = db.Column(db.String,nullable=False)
    phone = db.Column(db.String,nullable=False)
    
    created_at = db.Column(db.DateTime, server_default = db.func.now())
    updated_at = db.Column(db.DateTime, onupdate = db.func.now())

    sessions = db.relationship('Session', backref = 'user', cascade = 'all, delete-orphan')
    # gyms = association_proxy('memberships', 'gym')

    @validates( 'age' )
    def Uage(self, key, value):
        if len(value) < 1:
            raise ValueError( 'Age too Low')
        return value
    @validates( 'phone' )
    def Uphone(self, key, value):
        if len(value) < 1:
            raise ValueError( 'Phone # too short')
        return value
    @validates( 'email' )
    def Uemail(self, key, value):
        if len(value) < 1:
            raise ValueError( 'email too short')
        return value
    
    @validates( 'worstSubject' )
    def validate_study( self, key, worstSubject ):
        options = [ 'Math', 'Science', 'Reading', 'Spelling','Social Studies' ]
        if worstSubject not in options:
            raise ValueError( 'plan must be in options!!!' )
        return worstSubject
    
    @validates( 'bestSubject' )
    def validate_study( self, key, bestSubject ):
        options = [ 'Math', 'Science', 'Reading', 'Spelling','Social Studies' ]
        if bestSubject not in options:
            raise ValueError( 'plan must be in options!!!' )
        return bestSubject
    
    




    # def __repr__(self):
    #     return f'User {self.username}, ID {self.id}'

    @hybrid_property
    def password_hash(self):
        raise Exception('Password hashes may not be viewed.')

    @password_hash.setter
    def password_hash(self, password):
        # utf-8 encoding and decoding is required in python 3
        password_hash = bcrypt.generate_password_hash(
            password.encode('utf-8'))
        self._password_hash = password_hash.decode('utf-8')

    def authenticate(self, password):
        return bcrypt.check_password_hash(
            self._password_hash, password.encode('utf-8'))

    @staticmethod
    def simple_hash(input):
        return sum(bytearray(input, encoding='utf-8'))
    
    
# ////nullable fo gym&user idbefore the push

class Session(db.Model, SerializerMixin):
    __tablename__ = 'Sessions'
    serialize_rules= ( "created_at","-updated_at", "-user_id","-user._password_hash", "-user.id")

    id = db.Column(db.Integer, primary_key = True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'),nullable=False)
   
    created_at = db.Column(db.DateTime, server_default = db.func.now())
    updated_at = db.Column(db.DateTime, onupdate = db.func.now())

   
   







