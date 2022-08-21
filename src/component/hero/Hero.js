import React from "react";
import "./hero.css";
import "./button.css";
// import video3 from "../../assests/video3.mp4";
import bg1 from "../../assests/bg1.gif";
import Typewriter from "typewriter-effect";

import "../../fonts/Centauri.woff";

const Hero = () => {
  return (
    <>
      <section className="hero">
        <div className="hero-container">
          <div className="hero_content">
            <h1 id="h1">
              Hi! I Am{"  "}
              <br />
              Yash Suthar
            </h1>
            <p>
              <Typewriter
                options={{
                  strings: [
                    "UI/UX Design",
                    "Front-end developer",
                    "Back-end developer",
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </p>
            <div className="btn-container">
              <div className="btn-border">
                <a href="">
                  <button className="btn">Contact Me</button>
                </a>
              </div>
            </div>
          </div>
          <div className="hero_img">
            <img src={bg1}></img>
          </div>
          {/* <video src={video3} loop autoPlay muted></video> */}
        </div>
      </section>
    </>
  );
};

export default Hero;
