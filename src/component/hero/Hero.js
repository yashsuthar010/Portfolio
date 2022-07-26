import React from "react";
import "./hero.css";
import "./button.css";
import bg from "../../assests/bg.jpg";

const Hero = () => {
  return (
    <>
      <section className="hero">
        <div className="hero-container">
          <h1>I'm Yash Suthar</h1>
          <p>Full Stack Developer</p>
          <div className="btn-container">
            <div className="btn-border">
              <a href="">
                <button className="btn">Download CV</button>
              </a>
            </div>
          </div>

          <img src={bg}></img>
        </div>
      </section>
    </>
  );
};

export default Hero;
