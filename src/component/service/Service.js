import React from "react";
import "./service.css";
import responsive from "../../assests/responsive.png";
import integraion from "../../assests/integration.png";
import frontend from "../../assests/frontend.png";
import backend from "../../assests/backend.png";

const Service = () => {
  return (
    <>
      <div className="service">
        <h2>Services</h2>
        <div className="service-container">
          <div className="services">
            <div className="service0">
              <div className="service-img">
                <img src={frontend}></img>
              </div>

              <h3>
                Front-end design <br />
                and development
              </h3>
            </div>
            <div className="service0">
              <div className="service-img">
                <img src={backend}></img>
              </div>
              <h3>Back-end development</h3>
            </div>
            <div className="service0">
              <div className="service-img">
                <img src={responsive}></img>
              </div>
              <h3>
                Responsive, fast, <br /> and dynamic
              </h3>
            </div>
            <div className="service0">
              <div className="service-img">
                <img src={integraion}></img>
              </div>
              <h3>Integration</h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Service;
