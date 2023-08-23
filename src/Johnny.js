import React, { useState } from "react";
import './App.css';
import * as yup from 'yup';
// import axios from 'axios'
import {useNavigate} from 'react-router-dom'



function Johnny({ onLogin }) {
    const navigate = useNavigate()
    const [userName, setUserName] = useState('');
    const [fullName, setFullName] = useState('');
    const [password, setPassword] = useState('');
    const [age, setAge] = useState('');
    const [school, setSchool] = useState('');
    const [bestSubject, setBestSubject] = useState('');
    const [worstSubject, setWorstSubject] = useState('');
    const [parentsEmail, setParentsEmail] = useState('');
    const [parentsPhoneNumber, setParentsPhoneNumber] = useState('');
    const [students, setStudents] = useState([]);
    const [errors, setErrors] = useState([]);

    // Yup validation schema
    const validationSchema = yup.object().shape({
        userName: yup.string().required('Username is required'),
        password: yup.string().required('Password is required')
        .min(6, 'Password must be 6 characters long')
        .matches(/[0-9]/, 'Password requires a number')
        .matches(/[A-Z]/, 'Password requires an uppercase letter')
        .matches(/[^\w]/, 'Password requires a symbol'),
        fullName: yup.string().required('Full Name is required'),
        age: yup
            .number()
            .required('Age is required')
            .positive('Age must be a positive number')
            .integer('Age must be an integer'),
        school: yup.string().required('School is required'),
        bestSubject: yup.string().required('Best Subject is required'),
        worstSubject: yup.string().required('Worst Subject is required'),
        parentsEmail: yup.string().email('Invalid email').required('Parents\' Email is required'),
        parentsPhoneNumber: yup.string().required('Parents\' Phone Number is required'),
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // Validate the form data using Yup
            await validationSchema.validate({
                userName,
                password,
                fullName,
                age,
                school,
                bestSubject,
                worstSubject,
                parentsEmail,
                parentsPhoneNumber,
            });

            // If validation passes, create a new student object
            const newStudent = {
                userName,
                password,
                fullName,
                age,
                school,
                bestSubject,
                worstSubject,
                parentsEmail,
                parentsPhoneNumber
            };
            fetch('/signup', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(newStudent),
              }).then((r) => {
                if (r.ok) {
                    r.json().then(console.log('success'));
                    setStudents([...students, newStudent]);
                    onLogin(newStudent)
                    navigate('/');
          } else {
            console.log('failure');
          }
        });

            // Reset the form fields after submission
            setUserName('')
            setFullName('');
            setPassword('');
            setAge('');
            setSchool('');
            setBestSubject('');
            setWorstSubject('');
            setParentsEmail('');
            setParentsPhoneNumber('');
        } catch (error) {
            // Handle validation errors
            console.error(error.message);
            const validationErrors = {};
            error.inner.forEach((error) => {
            validationErrors[error.path] = error.message;
            });
            setErrors(error.message);
            
        }
    };

    const [username, setUsername] = useState("")
    const [_password, set_password] = useState("")
    const [isIncorrect, setIsIncorrect] = useState(false)

    const toggleIncorrect =()=>{
        setIsIncorrect(!isIncorrect)
    }
    function handleSubmit2(e) {
        e.preventDefault();
        fetch("/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ username, _password }),
        }).then((r) => {
            if (r.ok) {
                r.json().then((user) => {
                    console.log(user)
                    onLogin(user)
                    navigate('/') })
  
                
            }
            else {
                toggleIncorrect()
            }
          });
      }
      

    const [showVideo, setShowVideo] = useState(false);

    const toggleVideoVisibility = () => {
      setShowVideo(!showVideo);
    };
    console.log(errors)

    return (
        <div className="johnny">
            <h1 style={{marginTop:'0%'}}>Sign Up / Login</h1>
            <div style={{ display: 'inline-block',marginBottom:'5%'}}className="custom-checkbox">
          <input
            id="status"
            type="checkbox"
            name="status"
            checked={showVideo}
            onChange={toggleVideoVisibility}
          />
          <label style={{}} htmlFor="status">
            <div
            
              className={`status-switch ${showVideo ? 'checked' : ''}`}
              data-unchecked="Sign-Up"
              data-checked="Login"
            ></div>
          </label>
        </div>

        { showVideo ? 
            <form style={{textAlign:'right',color:'white', marginRight:'35%'}} onSubmit={handleSubmit}>
                <label>Username:</label>
                <input type="text" value={userName} onChange={(e) => setUserName(e.target.value)} required /><br></br>
                <label>Password:</label>
                <input type="text" value={password} onChange={(e) => setPassword(e.target.value)} required /><br></br>

                <label>Full Name:</label>
                <input type="text" value={fullName} onChange={(e) => setFullName(e.target.value)} required /><br></br>
                <label className="schead">Student's Age:</label>
                <input type="number" value={age} onChange={(e) => setAge(e.target.value)} required /><br></br>
                <label>School:</label>
                <input type="text" value={school} onChange={(e) => setSchool(e.target.value)} required /><br></br>
                {/* <label>Best Subject:</label>
                <input type="text" value={bestSubject} onChange={(e) => setBestSubject(e.target.value)} required /><br></br> */}

                <label>
                    Best Subject:
                    <select style={{ backgroundColor: 'white',padding: '3px',paddingLeft: '3%',appearance: 'listbox'}} value={bestSubject} onChange={(e) => setBestSubject(e.target.value)}>
                        <option value=""></option>
                        <option value="Math">Math</option>
                        <option value="Science">Science</option>
                        <option value="Reading">Reading</option>
                        <option value="Spelling">Spelling</option>
                        <option value="Social Studies">Social Studies</option>
                    </select>
                    </label><br></br>


                {/* <label>Worst Subject:</label>
                <input type="text" value={worstSubject} onChange={(e) => setWorstSubject(e.target.value)} required /><br></br> */}

                <label>
                    Worst Subject:
                    <select style={{ backgroundColor: 'white',padding: '3px',paddingLeft:'3%',appearance: 'listbox'}} value={worstSubject} onChange={(e) => setWorstSubject(e.target.value)}>
                        <option value=""></option>
                        <option value="Math">Math</option>
                        <option value="Science">Science</option>
                        <option value="Reading">Reading</option>
                        <option value="Spelling">Spelling</option>
                        <option value="Social Studies">Social Studies</option>
                    </select>
                    </label><br></br>

                <label className="schead">Parents' Email:</label>
                <input type="email" value={parentsEmail} onChange={(e) => setParentsEmail(e.target.value)} required /><br></br>
                <label className="schead">Parents' Phone #:</label>
                <input type="tel" value={parentsPhoneNumber} onChange={(e) => setParentsPhoneNumber(e.target.value)} required /><br></br>
                <button style={{marginRight:'17%',minWidth:'10%'}} type="submit">Submit</button>
                
                {errors && (<p className="errors" style={{ border: errors.length > 1 ? '2px solid darkred' : 'none' }}>{errors} </p>)}

                



            </form> : 
            // <form >
            <form style={{textAlign:'right',color:'white', marginRight:'35%',paddingBottom: '15%'}} onSubmit={handleSubmit2}>
            <label >Username:</label>
            <input
              type="text"
              value={username}
              placeholder=""
              onChange={(e) => setUsername(e.target.value)}
            />
            <br></br>
            <label >Password:</label>
            <input
            type="password"
            value={_password}
            placeholder=""
            onChange={(e) => set_password(e.target.value)}
          /><br></br>
            <button style={{marginRight:'17%',minWidth:'10%'}}  type="submit">Login</button>
            {isIncorrect ? <div>
                <h2>Username or Password Invalid, Please Try Again!</h2>
            </div>: null}
          </form>
                
                
                }


            <h2>All Students:</h2>
            <ul>
                {students.map((student, index) => (
                    <li key={index}>
                        {student.firstName} {student.lastName}, Age: {student.age}, School: {student.school}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Johnny;
