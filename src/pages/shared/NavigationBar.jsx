import React, { useContext } from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const NavigationBar = () => {
  const { user, logOut } = useContext(AuthContext);

  // logout
  const handleLogOut = () => {
    logOut()
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
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
                <Link>
                  {user?.photoURL ? (
                    <>
                      <img
                        className="rounded-circle"
                        style={{ width: "2.4rem" }}
                        src={user?.photoURL}
                        alt="user image"
                      />
                    </>
                  ) : (
                    <Button variant="warning">{user?.email}</Button>
                  )}
                </Link>
              )}
              {user ? (
                <Button variant="dark ms-2" onClick={handleLogOut}>
                  Logout
                </Button>
              ) : (
                <Link className="btn btn-dark ms-2" to={"/login"}>
                  Login
                </Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Container>
  );
};

export default NavigationBar;
