import React from "react";
import "./hero.css";
import "./button.css";
import video3 from "../../assests/video3.mp4";

const Hero = () => {
  return (
    <>
      <section className="hero">
        <div className="hero-container">
          <h1 id="h1">I'm Yash Suthar</h1>
          <p>Full Stack Developer</p>
          <div className="btn-container" style={{ marginLeft: "37%" }}>
            <div className="btn-border">
              <a href="">
                <button className="btn">Contact Me</button>
              </a>
            </div>
          </div>
          {/* <img src={bg1}></img> */}
          <video src={video3} loop autoPlay muted></video>
        </div>
      </section>
    </>
  );
};

export default Hero;
