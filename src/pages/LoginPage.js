import React, { useState } from "react";

import { Form, Button, Container } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";

export default function LoginPage(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [validated, setValidated] = useState(false);

  const dispatch = useDispatch();
  let history = useHistory();

  const onSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.stopPropagation();
    } else {
      props.onSubmit(email, password);
      history.push("/company");
      dispatch({ type: "SIGN_IN", payload: { email, password } });
    }
    setValidated(true);
  };

  return (
    <Container fluid className="loginForm">
      <Form
        className="form col-lg-5 col-xl-3 col-md-5 col-sm-5 col-xs-6 mx-auto h-100"
        onSubmit={onSubmit}
        noValidate
        validated={validated}
      >
        <h2>Login</h2>
        <p>Please enter your email and password</p>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            required
            type="email"
            placeholder="Enter email"
            onChange={e => setEmail(e.target.value)}
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            required
            type="password"
            placeholder="Password"
            onChange={e => setPassword(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="formBasicCheckbox">
          <Form.Check type="checkbox" required label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit" required>
          Submit
        </Button>
      </Form>
    </Container>
  );
}
