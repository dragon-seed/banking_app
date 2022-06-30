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
        <Button variant="primary" size="lg" style={{ backgroundColor: "blue" }}>
          <Link to='/signup' style={{ color: 'white', textDecoration: 'none'}}>
          Create an Account
          </Link>
        </Button>
        <Button
          variant="secondary"
          size="lg"
          style={{ color: "white", backgroundColor: "gray" }}>
            <Link to='/login' style={{ color: 'white', textDecoration: 'none', }}>
          I already have an account
          </Link>
        </Button>
      </div>
    </>
  );
};

export default LandingPage;
