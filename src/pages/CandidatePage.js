import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";

import { InputGroup, Form, Col, Button, Container } from "react-bootstrap";

export default function EditCandidatesPage() {
  const [candidate, setCandidates] = useState([]);
  const [validated, setValidated] = useState(false);

  const { id } = useParams();
  let history = useHistory();

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.stopPropagation();
    } else {
      updateCandidate();
      history.push("/candidates");
    }
    setValidated(true);
  };

  const getCandidates = async () => {
    const response = await fetch("http://localhost:3001/candidates/" + id);
    const data = await response.json();
    setCandidates(data);
  };

  const updateCandidate = async () => {
    const response = await fetch("http://localhost:3001/candidates/" + id, {
      headers: { "content-type": "application/json" },
      method: "PUT",
      body: JSON.stringify(candidate)
    });
  };

  useEffect(() => {
    getCandidates();
  }, []);

  return (
    <Container fluid className="editPage">
      <Form
        noValidate
        validated={validated}
        onSubmit={handleSubmit}
        className="w-50 mx-auto form"
      >
        <Form.Row>
          <Form.Group as={Col} md="4" controlId="validationCustom01">
            <Form.Label>First name</Form.Label>
            <Form.Control
              required
              type="text"
              value={candidate.first_name}
              onChange={e =>
                setCandidates({ ...candidate, first_name: e.target.value })
              }
              placeholder="First name"
              defaultValue="Mark"
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="4" controlId="validationCustom02">
            <Form.Label>Last name</Form.Label>
            <Form.Control
              required
              type="text"
              value={candidate.last_name}
              onChange={e =>
                setCandidates({ ...candidate, last_name: e.target.value })
              }
              placeholder="Last name"
              defaultValue="Otto"
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="4" controlId="validationCustomUsername">
            <Form.Label>Username</Form.Label>
            <InputGroup>
              <InputGroup.Prepend>
                <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
              </InputGroup.Prepend>
              <Form.Control
                type="text"
                placeholder="Job Title"
                value={candidate.job_title}
                onChange={e =>
                  setCandidates({ ...candidate, job_title: e.target.value })
                }
                aria-describedby="inputGroupPrepend"
                required
              />
              <Form.Control.Feedback type="invalid">
                Please choose a Job Title.
              </Form.Control.Feedback>
            </InputGroup>
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group as={Col} md="6" controlId="validationCustom03">
            <Form.Label>City</Form.Label>
            <Form.Control
              type="text"
              placeholder="City"
              onChange={e =>
                setCandidates({ ...candidate, city: e.target.value })
              }
              value={candidate.city}
              required
            />
            <Form.Control.Feedback type="invalid">
              Please provide a valid city.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="3" controlId="validationCustom04">
            <Form.Label>State</Form.Label>
            <Form.Control
              type="text"
              placeholder="State"
              onChange={e =>
                setCandidates({ ...candidate, country: e.target.value })
              }
              value={candidate.country}
              required
            />
            <Form.Control.Feedback type="invalid">
              Please provide a valid state.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="3" controlId="validationCustom05">
            <Form.Label>Photo Url</Form.Label>
            <Form.Control
              type="text"
              placeholder="Photo Url"
              onChange={e =>
                setCandidates({ ...candidate, photo_url: e.target.value })
              }
              value={candidate.photo_url}
              required
            />
            <Form.Control.Feedback type="invalid">
              Please provide a valid photo Url
            </Form.Control.Feedback>
          </Form.Group>
        </Form.Row>
        <Form.Group>
          <Form.Check
            required
            label="Agree to terms and conditions"
            feedback="You must agree before submitting."
          />
        </Form.Group>
        <Button type="submit">Submit form</Button>
      </Form>
    </Container>
  );
}
