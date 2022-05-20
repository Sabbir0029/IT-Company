import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import useAuth from "../../Hooks/useAuth";

const Navigation = () => {
  const { user, logOut,admin } = useAuth();
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="light" variant="dark">
        <Container>
          <Navbar.Brand href="/">
            <span className="text-success fw-bold">IT</span>
            <span className="text-dark fw-bold">Company</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="text-dark me-auto">
              <Nav.Link href="/" className="text-dark ">
                Home
              </Nav.Link>
              <Nav.Link href="OurServices" className="text-dark ">
                Our Services
              </Nav.Link>
              <Nav.Link href="JobCircular" className="text-dark ">
                Job Circular
              </Nav.Link>
              {admin && <Nav.Link href="JobPost" className="text-dark ">
              Job Post
              </Nav.Link>}
              {admin && <Nav.Link href="makeAdmin" className="text-dark ">
              Make Admin
              </Nav.Link>}
            </Nav>
            <Nav>
              {user?.email ? (
                <Nav.Link
                  href="/SignIn"
                  className="text-dark fw-bold "
                  onClick={logOut}
                >
                  Sign Out
                </Nav.Link>
              ) : (
                <Nav.Link href="/SignIn" className="text-dark fw-bold ">
                  Sign In
                </Nav.Link>
              )}
              <Nav.Link href="/SignUp" className="text-dark fw-bold ">
                Sign Up
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navigation;
