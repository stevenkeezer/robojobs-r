import React from "react";
import { useSelector } from "react-redux";
import { Form, Col, Button, Container } from "react-bootstrap";

export default function Company(props) {
  const currentUserEmail = useSelector(state => state.email);
  const currentUserPassword = useSelector(state => state.password);

  return (
    <Container fluid className="companyContainer">
      <h1 className="accountHeader" style={{ textAlign: "center" }}>
        My Account
      </h1>
      <Form className=" mx-auto col-lg-5 col-xl-5 col-md-5 col-sm-5 col-xs-6 form">
        <Form.Row>
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              value={currentUserEmail}
              placeholder="Enter email"
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              value={currentUserPassword}
            />
          </Form.Group>
        </Form.Row>

        <Form.Group controlId="formGridAddress1">
          <Form.Label>Address</Form.Label>
          <Form.Control placeholder="1234 Main St" />
        </Form.Group>

        <Form.Group controlId="formGridAddress2">
          <Form.Label>Address 2</Form.Label>
          <Form.Control placeholder="Apartment, studio, or floor" />
        </Form.Group>

        <Form.Row>
          <Form.Group as={Col} controlId="formGridCity">
            <Form.Label>City</Form.Label>
            <Form.Control />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridState">
            <Form.Label>State</Form.Label>
            <Form.Control as="select">
              <option>Choose...</option>
              <option>...</option>
            </Form.Control>
          </Form.Group>

          <Form.Group as={Col} controlId="formGridZip">
            <Form.Label>Zip</Form.Label>
            <Form.Control />
          </Form.Group>
        </Form.Row>

        <Form.Group id="formGridCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
}

// <div className="container-fluid companyContainer text-center">
//   <h1>Company Account Page</h1>
//   <h3>Username: {currentUserEmail}</h3>
//   <h3>Password: {currentUserPassword}</h3>
// </div>
