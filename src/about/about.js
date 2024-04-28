import React from "react";
import './about.css'

const About = () =>{
    return (
        <div>
        <div style={{ 
        backgroundImage: 'url(oipdc.jpeg)', 
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '400px',
        position: 'relative',
        }}>
        <div style={{ 
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            textAlign: 'center',
            color: 'white',
            textShadow: '2px 2px 4px rgba(0,0,0,0.6)' // Optional: adds a shadow to the text
        }}>
            <h1>Your Text Here</h1>
            <p>Additional text can go here</p>
        </div>
        </div>
    </div>
    );
}

export default About;