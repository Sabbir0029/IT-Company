import React from "react";
import { Button } from "react-bootstrap";
import Office from "../../img/icon/Office.jpeg";

const AboutUs = () => {
  return (
    <div>
      <div class="container mt-5">
        <h1 className="mt-5 mb-5">About Us</h1>
        <div class="row mt-5">
          <div class="col-6">
            <h1>Welcome to <span className="text-success">IT Company</span></h1>
            <span>
              The Largest & Effective IT Solution Company In The World
            </span>
            <p>
              IT Company, a well acclaimed company successfully delivering
              unmatched quality service in IT from last couple of years. We are
              among the most renowned & trusted names in the Domain
              Registration, Web Hosting, Graphics Design, Web Design, Web
              Development, Theme Development, Software Development, Mobile Apps
              Development, eCommerce Solutions, Search Engine Optimization & any
              others IT Solution services in the World. We are very grateful to
              you for taking the time to consider us for your professional
              needs. DevXHub only exists because of our obligation to you, the
              client. Your needs are our needs, and no expenditure is spared in
              gathering these needs.
            </p>

            <Button className="bg-success border-light text-light rounded-pill w-25 mt-3 signInBox">
              View Details
            </Button>
          </div>
          <div class="col-6">
              <img src={Office} alt="" className="signInBox"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
