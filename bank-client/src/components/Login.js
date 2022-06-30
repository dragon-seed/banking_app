import MainScreen from "./MainScreen";
import { Form, Button, Row, Col } from "react-bootstrap";
// import {LinkContainer} from 'react-router-bootstrap'
import Link from 'react-router-dom'

const Login = () => {
    
  return (
    
    <MainScreen title="Login">
        <div className='loginContainer'>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            If you haven't signed up yet, please register here.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      </div>
  </MainScreen>
  
    
)};

export default Login;
