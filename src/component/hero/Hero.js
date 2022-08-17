import React from "react";
import "./hero.css";
import "./button.css";
// import video3 from "../../assests/video3.mp4";
import bg from "../../assests/bg.jpg";
import Typewriter from "typewriter-effect";

import "../../fonts/Centauri.woff";

const Hero = () => {
  return (
    <>
      <section className="hero">
        <div className="hero-container">
          <h1 id="h1">I'm Yash Suthar</h1>
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
          <div className="btn-container" style={{ marginLeft: "37%" }}>
            <div className="btn-border">
              <a href="">
                <button className="btn">Contact Me</button>
              </a>
            </div>
          </div>
          <img src={bg}></img>
          {/* <video src={video3} loop autoPlay muted></video> */}
        </div>
      </section>
    </>
  );
};

export default Hero;
