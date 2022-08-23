import React from "react";
import "./about.css";
import "./skills.css";
import yash_img from "../../assests/yash_img.jpg";
import python from "../../assests/python.png";
import js from "../../assests/js.png";
import react from "../../assests/react.png";
import html from "../../assests/html.png";
import css from "../../assests/css.png";
import figma from "../../assests/figma.png";
import vs from "../../assests/vs.png";

import yash from "../../assests/yash.pdf";

const About = () => {
  return (
    <>
      <div>
        <div className="about ">
          <div className="middle">
            <div className="two">
              <h1>About Me</h1>
              <p>
                I'm Full Stack Developer with a passion for UI effects,
                animations and creating intuitive user experiences with highly
                scalable backend. I’m currently learning ThreeJS but also want
                to explore my potential in Machine Learning and Artificial
                Intelligence
              </p>
              <br />

              <br />

              <div className="btn-container1">
                <div className="btn-border">
                  <a href={yash} download>
                    <button className="btn">Download CV</button>
                  </a>
                </div>
              </div>
              <br />
              <br />
              <h3 id="h3">My Skills</h3>
              <div className="skill_container">
                <div className="skill_img">
                  <img src={python}></img>
                </div>
                <div className="skill_img">
                  <img src={js}></img>
                </div>
                <div className="skill_img">
                  <img src={react}></img>
                </div>
                <div className="skill_img">
                  <img src={html}></img>
                </div>
                <div className="skill_img">
                  <img src={css}></img>
                </div>
              </div>
              <h3 id="h3">Tools</h3>
              <div className="skill_container">
                <div className="skill_img">
                  <img src={figma}></img>
                </div>
                <div className="skill_img">
                  <img src={vs}></img>
                </div>
              </div>
            </div>

            <div className="one">
              <img src={yash_img} id="yash"></img>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
