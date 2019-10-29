import React, { useEffect, useState } from "react";
import Loader from "react-loader-spinner";
import { Link } from "react-router-dom";
import { Spinner } from "react-bootstrap";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

import {
  Row,
  Card,
  ListGroup,
  Container,
  ListGroupItem,
  Button
} from "react-bootstrap";

export default function CandidatesPage() {
  const [candidates, setCandidates] = useState([]);

  const getCandidates = async () => {
    const response = await fetch("http://localhost:3001/candidates");
    const data = await response.json();
    setCandidates(data);
  };

  const deleteCandidate = async id => {
    const response = await fetch(`http://localhost:3001/candidates/${id}`, {
      headers: { "content-type": "application/json" },
      method: "DELETE"
    });
    if (response.status === 200) {
      const newCandidates = candidates.filter(candidate => candidate.id !== id);
      setCandidates(newCandidates);
    }
  };

  useEffect(() => {
    getCandidates();
  }, []);

  const renderCandidates = () => {
    return candidates.map(candidate => {
      return (
        <Card
          className="mx-auto m-2"
          style={{ width: "18rem" }}
          key={candidate.id}
        >
          <Card.Img variant="top" src={candidate.photo_url} />{" "}
          <Card.Body>
            <Card.Title>
              {" "}
              {candidate.first_name + " " + candidate.last_name}
            </Card.Title>{" "}
            <Card.Text></Card.Text>{" "}
          </Card.Body>{" "}
          <ListGroup className="list-group-flush">
            <ListGroupItem>{candidate.company}</ListGroupItem>
            <ListGroupItem>{candidate.email}</ListGroupItem>
            <ListGroupItem>{candidate.job_title}</ListGroupItem>{" "}
          </ListGroup>{" "}
          <Card.Body>
            <Link to={`/candidates/${candidate.id}`}>
              <Button>Edit</Button>
            </Link>
            <Button
              variant="danger"
              onClick={() => deleteCandidate(candidate.id)}
            >
              Remove
            </Button>
          </Card.Body>{" "}
        </Card>
      );
    });
  };

  if (candidates.length === 0) {
    return (
      <div className="text-center align-self-center">
        <Spinner
          variant="info"
          className="spinner"
          animation="border"
          role="status"
        >
          <span className="sr-only">Loading...</span>
        </Spinner>
      </div>
    );
  }
  return (
    <Container fluid className="candidatePage">
      <Row>{renderCandidates()}</Row>
    </Container>
  );
}
