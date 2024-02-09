import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";

import React from "react";

const NavBar = () => {
  return (
    <Navbar expand="sm" className="bg-dark fixed-top">
      <Container>
        <Navbar.Brand href="#home" className="text-light">
          Ecom-Web
        </Navbar.Brand>
        <Navbar.Collapse
          id="basic-navbar-nav"
          className="d-flex justify-content-center">
          <Nav>
            <Nav.Link href="#home" className="text-light">
              HOME
            </Nav.Link>
            <Nav.Link href="#store" className="text-light">
              STORE
            </Nav.Link>
            <Nav.Link href="#about" className="text-light">
              ABOUT
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <div>
          <Button variant="outline-info" className="border-3 rounded-3">
            cart
          </Button>
          <span className="m-2 align-top fs-3 text-info">8</span>
        </div>
      </Container>
    </Navbar>
  );
};

export default NavBar;
