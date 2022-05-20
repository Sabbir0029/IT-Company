import React from "react";
import { Button, Col, Container, Row } from 'react-bootstrap';

const ContactUs = () => {
  return (
    <div className="mt-5 mb-5">
      <h1 className="text-dark mb-4 fw-bold fst-italic pt-5">Get in Touch</h1>
      <div className="mt-5 mb-5">
        <Container>
          <Row>
            <Col className="pt-5 pb-5">
              <h1 className="text-dark fw-bold fst-italic">Write us</h1>
              <form>
                <input
                  className="w-75 mt-4 text-dark "
                  placeholder="Your Email"
                  name="email"
                  type="email"
                ></input>{" "}
                <br></br>
                <input
                  className="w-75 m-3 text-dark"
                  placeholder="Your Password"
                  name="password"
                  type="password"
                ></input>
                <br></br>
                <textarea className="w-75 fw-bold fst-italic text-dark"></textarea>
                <Button
                  type="submit"
                  className="w-75 bg-success border-light text-light rounded-pill mt-3 fw-bold"
                >
                  Send
                </Button>
              </form>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default ContactUs;
