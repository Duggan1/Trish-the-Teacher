import React, { useState } from "react";
import './App.css';

function Joey() {
    const colorSong = {
        'Blue': 'https://www.youtube.com/embed/EkQIpzuwXVc',
        'Red': 'https://www.youtube.com/embed/PRpiBpDy7MQ',
        'Green': 'https://www.youtube.com/embed/94TAFSMdkvk',
        'Purple': 'https://www.youtube.com/embed/TvnYmWpD_T8',
    }

    const [selectedColor, setSelectedColor] = useState('Blue');

    const handleColorChange = (event) => {
        setSelectedColor(event.target.value);
    }
    console.log(colorSong[selectedColor])
    console.log(selectedColor)
    console.log(colorSong)

    return (
        <div className="joey">
            <h1 style={{ marginTop: '0%' }}>Pt. 2</h1>
            <h2>content coming soon! </h2>
            <select id='Svideo' style={{ width: '50%', marginBottom: '5%',color:'white',backgroundColor:`${selectedColor}` }}  value={selectedColor} onChange={handleColorChange}>
                {Object.keys(colorSong).map((color) => (
                    <option key={color} value={color}>{color}</option>
                ))}
            </select>
            <br></br>
            <iframe style={{ borderRadius: '35%', width: '400px', maxWidth: '55%', height: '140px', border: `${selectedColor} 21px dotted` }} width="560" height="315" src={colorSong[selectedColor]} frameborder="0" allowfullscreen></iframe>
            <p>for development purposes</p>
            
            <iframe style={{ borderRadius: '25%', width: '400px', maxWidth: '90%', height: '240px', border: 'yellow 5px solid' }} width="560" height="315" src="https://www.youtube.com/embed/PRpiBpDy7MQ" frameborder="0" allowfullscreen></iframe>
            <p>for development purposes</p>
            <p>for development purposes</p>
            <iframe style={{maxWidth:"80%"}} width="560px" height="315px" src="https://www.youtube.com/embed/PRpiBpDy7MQ" frameborder="0" allowfullscreen></iframe>
            <p>for development purposes</p>
            <p>for development purposes</p>
            <p>for development purposes</p>
            <p>for development purposes</p>
            <p>for development purposes</p>
            <p>for development purposes</p>
            <p>for development purposes</p>
            <p>for development purposes</p>
            <p>for development purposes</p>
            <p>for development purposes</p>
            <p>for development purposes</p>
            <p>for development purposes</p>
            <p>for development purposes</p>
            <p>for development purposes</p>
            
           
            <p>for development purposes</p>
        </div>
    )
}

export default Joey;
