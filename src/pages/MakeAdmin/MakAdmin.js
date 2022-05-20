import React, { useState } from "react";
import { Button, Alert } from "react-bootstrap";
import imgAdmin from "../../img/icon/Admin.png";

const MakAdmin = () => {
  const [email, setEmail] = useState("");
  const [admin, setAdmin] = useState(false);

  const handelOnBlur = (e) => {
    setEmail(e.target.value);
  };
  const handelAdmin = (e) => {
    const user = { email };
    fetch("http://localhost:5000/users/admin", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          setEmail("");
          setAdmin(true);
        }
      });
    e.preventDefault();
  };
  return (
    <div className="dashboard">
      {admin &&
        ["success"].map((variant, idx) => (
          <Alert key={idx} variant={variant}>
            Made Admin {variant} in Correctly!
          </Alert>
        ))}
      <img src={imgAdmin} alt="" className="w-25 rounded-pill signInBox mt-3" />
      <h1 className="text-dark mb-4 fw-bold fst-italic pt-5">Make Admin</h1>
      <form onSubmit={handelAdmin}>
        <input
          className="w-25 text-dark rounded-pill"
          placeholder="Your Email"
          name="email"
          type="email"
          onBlur={handelOnBlur}
        ></input>
        <Button
          type="submit"
          className="m-1 fw-bold p-2 rounded-pill bg-success text-light border-light signInBox"
        >
          Make Admin
        </Button>
      </form>
    </div>
  );
};

export default MakAdmin;
