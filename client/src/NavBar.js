import React, { useState } from 'react';
import { NavLink } from "react-router-dom";
import {useNavigate} from 'react-router-dom'




function NavBar({ user }) {
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
      
        <h1 style={{ color: 'gold',  margin: '0%' }}>
          Trish the Teacher !
        </h1>
      
        <div
          style={{ height: '100px' }}
          className="apple"
          onClick={handleAppleClick}
        ></div><p style={{ color: 'yellow',  margin: '0%' }}>Click the Apple for the <strong>Menu!</strong></p>
        {/* Dropdown Menu */}
        {showDropdown && (
          <div style={{backgroundColor:'gold',padding:'2%',minWidth:'100%'}} className="dropdown-menu">
            {user ? ( <p></p> ):
            <div className='swm2' onClick={() => handleOptionClick('/section1')}>  <NavLink className=' color-blue'  exact to="/section1">Login/Sign-up</NavLink></div> }
            <div className='swm'  onClick={() => handleOptionClick('/section2')}><NavLink style={{textShadow:'0px 1px 8px rgb(0, 0, 0)'}} className='color-yellow' exact to="/section2">Videos</NavLink></div>
            <div className='swm'  onClick={() => handleOptionClick('/section3')}><NavLink className='color-green' exact to="/section3">Schedule</NavLink></div>
            <div className='swm'  onClick={() => handleOptionClick('/section4')}><NavLink className='color-purple' exact to="/section4">Experience </NavLink></div>
            <div className='swm'  onClick={() => handleOptionClick('/payment')}><NavLink className='color-orange' exact to="/payment">Payment Options</NavLink></div>
            <div className='swm'  onClick={() => handleOptionClick('/')}><NavLink className='color-red' exact to="/">Home</NavLink></div>
          </div>
        )}

        
        
        
      </header>
    </div>
  );
}

export default NavBar;
