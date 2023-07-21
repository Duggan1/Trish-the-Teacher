import React, { useState, useEffect } from 'react';
import NavBar from './NavBar';
import './App.css';
import Home from './Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Elijah from './Elijah';
import Johnny from './Johnny';
import Joey from './Joey';
import Tommy from './Tommy';
import Payment from './Payment';







function App() {
  const [showDropdown, setShowDropdown] = useState(false);

  const handleAppleClick = () => {
    setShowDropdown(!showDropdown);
  };

  const handleOptionClick = (option) => {
    // Implement the functionality for each option here if needed
    console.log(`Option "${option}" clicked.`);
    setShowDropdown(false);
  };
  console.log(showDropdown)
  const [user, setUser] = useState(null);
  const [signUp, setSignUp] = useState(false)
  const handleSignupClick=() =>{
        setSignUp(!signUp)
    }
  

  useEffect(() => {
    fetch("/check_session").then((response) => {
      if (response.ok) {
        response.json().then((user) => setUser(user));
      }
    });
  }, []);

  function handleLogin(user) {
    setUser(user);
}
  function handleLogout(){
    setUser(null);
  }


  return (
    <BrowserRouter>
    <NavBar /> 
    {user ? <h1>Hello {user.fullName}</h1>: <p>Please Login/Signup</p>}
    <Routes>
      <Route path="/" element={<Home/>} />
       
      <Route path="/johnny" element={<Johnny onLogin={handleLogin} onLogout={handleLogout} />} />
      <Route path="/joey" element={<Joey />} />
      <Route path="/tommy" element={<Tommy/>}/>
      <Route path="/elijah" element={<Elijah/>}/>
      <Route path="/payment" element={<Payment/>}/>
      
       
    </Routes>
    
    
    </BrowserRouter>
  );
}

export default App;
