import React from "react";
import webdesign from "../../img/icon/171-1710609_digital-design-icon-png-transparent-png.png";
import webdevelopment from "../../img/icon/127-1272278_web-application-development-service-hd-png-download.png";
import MobileAppDevelopment from "../../img/icon/Mobile App Development.png";
import UI from "../../img/icon/ui-ux.png";
import Animation from "../../img/icon/3D.jpg";
import DomainandHosting from "../../img/icon/Domain and Hosting.png";

const OurServices = () => {
  return (
    <div class="container mt-5">
        <h1 className="mb-5">Our Services</h1>
      <div class="row">
        <div class="col signInBox m-4 p-5">
          <img src={webdesign} alt="" className="Servicesicon"/>
          <h3 className="mt-4">Web Design</h3>
          <span>
            Our design is always Pixel perfect ( 1:1 ratio ). We put our action
            to have the design responsiveness, and loaded quickly all every
            aspects.
          </span>
        </div>
        <div class="col signInBox m-4 p-5">
          <img src={webdevelopment} alt="" className="Servicesicon"/>
          <h3 className="mt-4">Web Development</h3>
          <span>
            It Company is always used modern and new technology for web
            development. We are able to fulfill your all requirements.
          </span>
        </div>
        <div class="col signInBox m-4 p-5">
          <img src={MobileAppDevelopment} alt="" className="Servicesicon"/>
          <h3 className="mt-4">Mobile App Development</h3>
          <span>At present, Mobile Apps are the major part of a good website. So we made it very carefully, beautiful and user friendly.</span>
        </div>
      </div>
      <div class="row">
        <div class="col signInBox m-4 p-5">
          <img src={Animation} alt="" className="Servicesicon" />
          <h3>3D Animation</h3>
          <span>3D animation is the art of using motion to bring characters, vehicles, props, and more to life within TV shows, films, and games.</span>
        </div>
        <div class="col signInBox m-4 p-5">
          <img src={DomainandHosting} alt="" className="Servicesicon"/>
          <h3 className="mt-4">Domain and Hosting</h3>
          <span>You can buy any sorts of domain, and hosting from us. We,re the best, and reliable domain, and hosting service provider Company in Bangladesh. </span>
        </div>
        <div class="col signInBox m-4 p-5">
          <img src={UI} alt="" className="Servicesicon"/>
          <h3 className="mt-4">UI/UX, And Graphics Design</h3>
          <span>We are providing all kinds of graphics designing work for any kind of company. We have many types or category of packages.</span>
        </div>
      </div>
    </div>
  );
};

export default OurServices;
