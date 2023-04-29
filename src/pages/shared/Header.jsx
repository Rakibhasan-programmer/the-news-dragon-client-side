import React from "react";
import logo from "../../assets/logo.png";
import moment from "moment";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import Marquee from "react-fast-marquee";

const Header = () => {
  return (
    <>
      <Container>
        <div className="text-center pt-4">
          <img src={logo} alt="" />
          <p>
            <small>Journalism Without Fear or Favor</small>
          </p>
          <p>{moment().format("dddd, MMMM Do YYYY")}</p>
        </div>
        <div className="d-flex">
          <Button className="rounded-0 py-2 px-3" variant="danger">
            Breaking
          </Button>
          <Marquee className="text-danger" speed={40}>
            I can be a React component, multiple React components, or just some
            text.... I can be a React component, multiple React components, or
            just some text
          </Marquee>
        </div>
        <div className="py-3">
          <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
            <Container>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mx-auto">
                  <Nav.Link href="#features">Home</Nav.Link>
                  <Nav.Link href="#pricing">About</Nav.Link>
                  <Nav.Link href="#pricing">Career</Nav.Link>
                </Nav>
                <Nav>
                  <Nav.Link href="#deets">Profile</Nav.Link>
                  <Button variant="dark">Login</Button>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </div>
      </Container>
    </>
  );
};

export default Header;
