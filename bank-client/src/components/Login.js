import MainScreen from "./MainScreen";
import { useState } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
// import {LinkContainer} from 'react-router-bootstrap'
import Link from "react-router-dom";
import axios, { AxiosError } from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const submitHandler = async (e) => {
    e.preventDefault();
    console.log(email, password);

    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };
      setLoading(true);

      const { data } = await axios.post(
        "/api/users/login",
        {
          email: email,
          password: password,
        },
        config
      );

      console.log(data);

      localStorage.setItem("userInfo", JSON.stringify(data));
      console.log(localStorage.getItem('userInfo'))

      setLoading(false);
    } catch (error) {
      setError(error.response.data.message);
    }
  };

  const sayHello = async () => {
    const response = await fetch("/api/hello");
    const data = await response.json();
    console.log(data);
  };

  const trackUser = async () => {
    const response = await fetch("/api/users/track");
    const data = await response.json();
    console.log(data);
  };

  // const sayHello = () => {
  //     fetch('/api/hello')
  //     .then(res => res.json())
  //     .then(data => console.log(data))
  // }

  return (
    <MainScreen title="Login">
      <div className="loginContainer">
        <Form onSubmit={submitHandler}>
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
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
        {/* <button onClick={trackUser} text="hello">
          hello
        </button> */}
      </div>
    </MainScreen>
  );
};

export default Login;
