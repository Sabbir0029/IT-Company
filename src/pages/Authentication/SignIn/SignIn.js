import React, { useState } from "react";
import { Alert, Button, Spinner } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
import "../../../Shared/Style.css";

const SignIn = () => {
  const [loginData, setLoginDate] = useState({});

  const { user, loginUser, isLoading } = useAuth();

  const location = useLocation();
  const history = useHistory();

  const handelOnChange = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newData = { ...loginData };
    newData[field] = value;
    setLoginDate(newData);
    console.log(newData);
  };
  const handelSubmitBtn = (e) => {
    loginUser(loginData.email, loginData.password, location, history);
    e.preventDefault();
  };
  return (
    <div className="d-flex align-items-center justify-content-center">
      <div className="container mt-5 signInBox">
        <div class="row">
          <div class=" col-sm-12 col-md-7">
            <div class="p-3">
              <h1 className="my-5">
                <span className="text-success fw-bold">IT</span>
                <span className="text-dark fw-bold">Company</span>
              </h1>
              <div className="text-center">
                <span className="fs-2">Sign in to Account</span>
                <hr />
                <span className="text-dark mb-5">Use your email account</span>
                {user?.email &&
                  ["success"].map((variant, idx) => (
                    <Alert key={idx} variant={variant}>
                      Logged {variant} in Correctly!
                    </Alert>
                  ))}
                <form onSubmit={handelSubmitBtn}>
                  <input
                    type="text"
                    name="email"
                    placeholder="Your Email"
                    className="m-2 w-75"
                    onChange={handelOnChange}
                  />
                  <br />
                  <input
                    type="password"
                    name="password"
                    placeholder="Your Password"
                    className="m-2 w-75"
                    onChange={handelOnChange}
                  />
                  <br />
                  <div className="mt-2">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckDefault"
                    />
                    <label class="form-check-label" for="flexCheckDefault">
                      Remember me
                    </label>
                    <span className="mx-5 mb-5">forgot passworld</span>
                  </div>
                  <input
                    type="submit"
                    value="Sign In"
                    className="mt-4 w-25 p-2 rounded-pill bg-success text-light border-light"
                  />
                </form>
                {isLoading && (
                  <Button variant="primary" disabled>
                    <Spinner
                      as="span"
                      animation="grow"
                      size="sm"
                      role="status"
                      aria-hidden="true"
                    />
                    Loading...
                  </Button>
                )}
                <div className="mt-5">
                  <span className="mt-5 p-5">Privacy</span>
                  <span>Team & Combination</span>
                </div>
              </div>
            </div>
          </div>
          <div class="col-sm-12 col-md-5 bg-success d-flex align-items-center justify-content-center">
            <div>
              <h1 className="text-light">Hello,Friend</h1>
              <span className="text-light">
                Fill up personal information and <br />
                start journey with us!
              </span>
              <br />
              <Link to="/SignUp">
                <Button className="bg-success border-light text-light rounded-pill w-75 mt-5">
                  Sign Up
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
