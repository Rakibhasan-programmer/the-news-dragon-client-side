import React, { useContext } from "react";
import logo from "../../assets/logo.png";
import moment from "moment";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { FaUserCircle } from "react-icons/fa";

const Header = () => {
  const { user } = useContext(AuthContext);
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
                  <Link className="text-decoration-none nav-link" to={"/"}>
                    Home
                  </Link>
                  <Link className="text-decoration-none nav-link" to={"/news"}>
                    News
                  </Link>
                  <Link
                    className="text-decoration-none nav-link"
                    to={"/career"}
                  >
                    Career
                  </Link>
                </Nav>
                <Nav>
                  {user && (
                    <Nav.Link href="#deets">
                      <FaUserCircle style={{fontSize: "1.9rem"}} />
                    </Nav.Link>
                  )}
                  {user ? (
                    <Button variant="dark ms-2">Logout</Button>
                  ) : (
                    <Button variant="dark ms-2">Login</Button>
                  )}
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
