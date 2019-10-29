import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { Navbar, Nav, Button } from "react-bootstrap";
import logo from "../img/logo.png";

export default function Navibar(props) {
  let history = useHistory();

  const clickHandler = () => {
    history.push("/login");
  };

  return (
    <Navbar bg="light" expand="lg" fixed="top" height="65px">
      <img alt="blah" width="70px" className="mr-2" src={logo}></img>
      <Navbar.Brand className="navBrand" href="#home">
        ROBOJOB
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Link className="nav-link" to={`/`}>
            HOME
          </Link>
          <Link className="nav-link" to={`/candidates`}>
            CANDIDATES
          </Link>
          <Link className="nav-link" to={`/company`}>
            COMPANY
          </Link>
        </Nav>
        {!props.currentUser.email && (
          <Button onClick={() => clickHandler()}>Login</Button>
        )}
      </Navbar.Collapse>
    </Navbar>
  );
}
