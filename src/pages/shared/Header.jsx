import React, { useContext } from "react";
import logo from "../../assets/logo.png";
import moment from "moment";
import { Button, Container } from "react-bootstrap";
import Marquee from "react-fast-marquee";

const Header = () => {
  return (
    <>
      <Container className="pb-3">
        <div className="text-center pt-4">
          <img className="img-fluid" src={logo} alt="" />
          <div className="pt-3">
            <span>
              <small>Journalism Without Fear or Favor</small>
            </span>
            <p>{moment().format("dddd, MMMM Do YYYY")}</p>
          </div>
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
      </Container>
    </>
  );
};

export default Header;
