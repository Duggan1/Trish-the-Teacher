import React, { useState } from 'react';
import NavBar from './NavBar';
import './App.css';
import Home from './Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Elijah from './Elijah';
import Johnny from './Johnny';
import Joey from './Joey';
import Tommy from './Tommy'







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

  return (
    <BrowserRouter>
    <NavBar /> 
    <Routes>
      <Route path="/" element={<Home/>} />
       
      <Route path="/johnny" element={<Johnny />} />
      <Route path="/joey" element={<Joey />} />
      <Route path="/tommy" element={<Tommy/>}/>
      <Route path="/elijah" element={<Elijah/>}/>
      
       
    </Routes>
    
    
    </BrowserRouter>
  );
}

export default App;
