import React, { useState } from 'react';
import { NavLink } from "react-router-dom";
import {useNavigate} from 'react-router-dom'




function NavBar() {
  const [showDropdown, setShowDropdown] = useState(false);
  const navigate = useNavigate()

  const handleAppleClick = () => {
    setShowDropdown(!showDropdown);
  };

  const handleOptionClick = (option) => {
    // Implement the functionality for each option here if needed
    console.log(`Option "${option}" clicked.`);
    
    setShowDropdown(false);
    navigate(`${option}`);
  };
  console.log(showDropdown)

  return (
    <div className="App">
      <header className="App-header">
      
        <h1 style={{ color: 'white',  margin: '0%' }}>
          Trish the Teacher !
        </h1>
      
        <div
          style={{ height: '100px' }}
          className="apple"
          onClick={handleAppleClick}
        ></div><p style={{ color: 'yellow',  margin: '0%' }}>Click the Apple for the <strong>Menu!</strong></p>
        {/* Dropdown Menu */}
        {showDropdown && (
          <div style={{backgroundColor:'darkred',padding:'2%',minWidth:'100%'}} className="dropdown-menu">
            <div className='swm'  onClick={() => handleOptionClick('/')}><NavLink className='color-red' exact to="/">Home</NavLink></div>
            <div className='swm2' onClick={() => handleOptionClick('/johnny')}>  <NavLink className=' color-blue'  exact to="/johnny">Johnny</NavLink></div>
            <div className='swm'  onClick={() => handleOptionClick('/joey')}><NavLink className='color-yellow' exact to="/joey">Joey</NavLink></div>
            <div className='swm'  onClick={() => handleOptionClick('/tommy')}><NavLink className='color-green' exact to="/tommy">Tommy</NavLink></div>
            <div className='swm'  onClick={() => handleOptionClick('/elijah')}><NavLink className='color-purple' exact to="/elijah">Elijah</NavLink></div>
          </div>
        )}

        
        
        
      </header>
    </div>
  );
}

export default NavBar;
