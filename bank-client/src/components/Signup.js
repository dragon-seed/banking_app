import MainScreen from "./MainScreen";
import { useState } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import ErrorMessage from './ErrorMessage'
import axios from 'axios';
const Signup = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const submitHandler = async (e) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            setMessage('Password not entered correctly')
        } else {
            try {
                const config = {
                  headers: {
                    "Content-type": "application/json",
                  },
                };
                setLoading(true);
          
                const { data } = await axios.post(
                  "/api/users",
                  {
                    name: name,
                    email: email,
                    password: password,
                  },
                  config
                );
          
                console.log(data);
          
                localStorage.setItem("userInfo", JSON.stringify(data));
          
                setLoading(false);
              } catch (error) {
                setError(error.response.data.message);
              }

        }
        
    }

  return (
    <MainScreen title="CREATE AN ACCOUNT">
      <div className="loginContainer">
          {message && <ErrorMessage variant='danger'>{message}</ErrorMessage>}
        <Form onSubmit={submitHandler}>
          <Form.Group className="mb-3" controlId="name">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="name"
              value={name}
              placeholder="Enter your name"
              onChange={(e) => setName(e.target.value)}
            />
            </Form.Group>
             <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              value={email}
              placeholder="Enter email"
              onChange={(e) => setEmail(e.target.value)}
            />
            
            <Form.Text className="text-muted">
              If you haven't signed up yet, please register here.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              value={password}
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="confirmPassword">
            <Form.Label>Confirm password</Form.Label>
            <Form.Control
              type="password"
              value={confirmPassword}
              placeholder="Confirm password"
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            </Form.Group>
          <Button variant="primary" type="submit">
            Register
          </Button>
        </Form>
      </div>
    </MainScreen>
  );
};

export default Signup;
