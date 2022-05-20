import React, { useState } from "react";
import { Alert, Button, Spinner } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";

const SignUp = () => {
  const [loginData, setLoginDate] = useState({});

  const { user, register, isLoading } = useAuth();
  const history = useHistory();
  const handelOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newData = { ...loginData };
    newData[field] = value;
    setLoginDate(newData);
  };
  const handelSubmitBtn = (e) => {
    if (loginData.password !== loginData.password2) {
      alert("your password did not match");
      return;
    }
    register(loginData.email, loginData.password, history);
    e.preventDefault();
  };
  return (
    <div className="d-flex align-items-center justify-content-center">
      <div className="container mt-5 signInBox">
        <div class="row">
          <div class="col-sm-12 col-md-5 bg-success d-flex align-items-center justify-content-center">
            <div>
              <h1 className="text-light">
                Hello ! Welcome to the IT Company Platform
              </h1>
              <span className="text-light mt-5">
                I'f You already have an account?
              </span>
              <br />
              <Link to="SignIn">
                <Button className="bg-success border-light text-light rounded-pill w-25 mt-5 ">
                  Sign In
                </Button>
              </Link>
            </div>
          </div>
          <div class=" col-sm-12 col-md-7">
            <div class="p-3">
              <h1 className="my-5">
                <span className="text-success fw-bold">IT</span>
                <span className="text-dark fw-bold">Company</span>
              </h1>
              <div className="text-center">
                <span className="fs-2">Create a new Account</span>
                <hr />
                <span className="text-dark mb-5">Use your email account</span>
                {user?.email &&
                  ["User"].map((variant, idx) => (
                    <Alert key={idx} variant={variant} className="bg-success text-light fw-bold">
                      {variant} Created Successfully!
                    </Alert>
                  ))}
                {!isLoading && (
                  <form onSubmit={handelSubmitBtn}>
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Full Name"
                      className="m-2 w-75"
                      onBlur={handelOnBlur}
                    />
                    <input
                      type="text"
                      name="email"
                      placeholder="Your Email"
                      className="m-2 w-75"
                      onBlur={handelOnBlur}
                    />
                    <br />
                    <input
                      type="password"
                      name="password"
                      placeholder="Your Password"
                      className="m-2 w-75"
                      onBlur={handelOnBlur}
                    />
                    <input
                      type="password"
                      name="password2"
                      placeholder="Conform Password"
                      className="m-2 w-75"
                      onBlur={handelOnBlur}
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
                      value="Sign Up"
                      className="mt-4 w-25 p-2 rounded-pill bg-success text-light border-light"
                    />
                  </form>
                )}
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
        </div>
      </div>
    </div>
  );
};

export default SignUp;
