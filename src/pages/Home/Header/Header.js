import { Button } from "react-bootstrap";
import React from "react";
import headerImg from "../../../img/hero-home-image.png";


const Header = () => {
  return (
    <div class="container">
      <div class="row g-5 mt-5">
        <div class="col-sm-12 col-md-6">
            <h1 className="mt-5">
              We Build Stunning <span className="text-danger fw-bold">web Design</span>, <br /> <span className="text-success fw-bold">web development</span> & <span className="text-info fw-bold">apps</span>.
            </h1>
            <span className="mt-4">
              Let your ideas come to life with elegance and professionalism
            </span><br/>
            <Button className="mt-5 fw-bold w-25 p-2 rounded-pill bg-success text-light border-light signInBox">More</Button>
        </div>
        <div class="mt-4 col-sm-12 col-md-6">
          <img src={headerImg} alt="" className="headerImg" />
        </div>
      </div>
    </div>
  );
};

export default Header;
