import React from "react";
import "./about.css";
import "./skills.css";
import yash_img from "../../assests/yash_img.jpg";

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
              {/* <ul
                className="icons"
                style={{ height: "10vh", border: "red solid" }}
              >
                <li>
                  <a href="https://github.com/yashsuthar010">
                    <AiFillGithub />
                  </a>
                </li>
                <li>
                  <a href="https://github.com/yashsuthar010">
                    <FiLinkedin />
                  </a>
                </li>
                <li>
                  <a href="https://github.com/yashsuthar010">
                    <SiMinutemailer />
                  </a>
                </li>
                <li>
                  <a href="https://github.com/yashsuthar010">
                    <AiFillTwitterCircle />
                  </a>
                </li>
              </ul> */}
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
              <div class="text-box">
                <div class="skill-bar-container">
                  <span class="skill-name">Javascript</span>
                  <span class="skill-percent">90%</span>
                  <span class="skill-bar level5"></span>
                </div>

                <div class="skill-bar-container">
                  <span class="skill-name">Python</span>
                  <span class="skill-percent">60%</span>
                  <span class="skill-bar level4"></span>
                </div>

                <div class="skill-bar-container">
                  <span class="skill-name">ReactJS</span>
                  <span class="skill-percent">90%</span>
                  <span class="skill-bar level3"></span>
                </div>

                <div class="skill-bar-container">
                  <span class="skill-name">Django</span>
                  <span class="skill-percent">50%</span>
                  <span class="skill-bar level2"></span>
                </div>

                <div class="skill-bar-container">
                  <span class="skill-name">HTML5 & CSS3</span>
                  <span class="skill-percent">100%</span>
                  <span class="skill-bar level1"></span>
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
