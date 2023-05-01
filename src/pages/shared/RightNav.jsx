import React, { useContext } from "react";
import { Button, ListGroup } from "react-bootstrap";
import {
  FaFacebook,
  FaGithub,
  FaGoogle,
  FaInstagram,
  FaPinterest,
  FaTwitter,
} from "react-icons/fa";
import QZone from "./QZone";
import bg from "../../assets/bg.png";
import { GoogleAuthProvider } from "firebase/auth";
import { AuthContext } from "../../providers/AuthProvider";

const RightNav = () => {
  const { googleLogin } = useContext(AuthContext);
  const provider = new GoogleAuthProvider();
  // google login
  const handleGoogleLogin = () => {
    googleLogin(provider)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
      })
      .catch((err) => console.log(err.message));
  };
  return (
    <>
      <div>
        <h4>Login with</h4>
        <Button
          className="mb-2 rounded-0 d-block"
          variant="outline-primary"
          onClick={handleGoogleLogin}
        >
          <FaGoogle className="me-2" />
          Login with Google
        </Button>
        <Button className="rounded-0 mb-2 d-block" variant="outline-secondary">
          <FaGithub className="me-2" />
          Login with Google
        </Button>
      </div>
      <div className="py-4">
        <h4>Find us on</h4>
        <ListGroup>
          <ListGroup.Item>
            <FaFacebook className="me-2" />
            Facebook
          </ListGroup.Item>
          <ListGroup.Item>
            <FaInstagram className="me-2" />
            Instagram
          </ListGroup.Item>
          <ListGroup.Item>
            <FaTwitter className="me-2" />
            Twitter
          </ListGroup.Item>
          <ListGroup.Item>
            <FaPinterest className="me-2" />
            Pinterest
          </ListGroup.Item>
        </ListGroup>
      </div>
      <QZone />
      {/* <div>
        <img src={bg} alt="" />
      </div> */}
    </>
  );
};

export default RightNav;
