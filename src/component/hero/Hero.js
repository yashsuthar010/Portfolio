import React from "react";
import "./hero.css";
import "./button.css";
import bg from "../../assests/bg.jpg";
import video from "../../assests/video.mp4";

const Hero = () => {
  return (
    <>
      <section className="hero">
        <div className="hero-container">
          <h1>I'm Yash Suthar</h1>
          <p>Full Stack Developer</p>
          <div className="btn-container3">
            <div className="btn-border3">
              <a href="">
                <button className="btn3">Contact Me</button>
              </a>
            </div>
          </div>
          {/* <img src={bg}></img> */}
          <video src={video} loop autoPlay muted></video>
        </div>
      </section>
    </>
  );
};

export default Hero;
