import React, { useContext } from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const NavigationBar = () => {
  const { user } = useContext(AuthContext);
  return (
    <Container className="py-3">
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
              <Link className="text-decoration-none nav-link" to={"/career"}>
                Career
              </Link>
            </Nav>
            <Nav>
              {user && (
                <Nav.Link href="/">
                  <FaUserCircle style={{ fontSize: "1.9rem" }} />
                </Nav.Link>
              )}
              {user ? (
                <Button variant="dark ms-2">Logout</Button>
              ) : (
                <Link className="btn btn-dark ms-2" to={"/login"}>Login</Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Container>
  );
};

export default NavigationBar;
