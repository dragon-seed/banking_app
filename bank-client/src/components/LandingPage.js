import React from "react";
import Button from "react-bootstrap/Button";
import { Link } from 'react-router-dom';
import './LandingPage.css'


const LandingPage = () => {

    
  return (
    <>
      <h1>Welcome!</h1>
      <br></br>
      <h2>Deposit or withdraw money at your convenience.</h2>
      <div className="d-grid gap-2">
      <Link to='/signup'>
        <Button variant="primary" size="lg" style={{ backgroundColor: "blue", width: "100%", color: 'white', height: '80px' }}>
          
          CREATE AN ACCOUNT
         
        </Button>
        </Link>
        <Link to='/login'>
        <Button variant="primary" size="lg" style={{ backgroundColor: "gray", width: "100%", color: 'white', height: '80px' }}>
          
          LOGIN
         
        </Button>
        </Link>
      </div>
    </>
  );
};

export default LandingPage;
