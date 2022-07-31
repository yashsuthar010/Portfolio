import React from "react";
import "./nav.css";
import { AiFillGithub, AiFillTwitterCircle } from "react-icons/ai";
import { FiLinkedin } from "react-icons/fi";
import { SiMinutemailer } from "react-icons/si";

const Nav = () => {
  return (
    <>
      <nav>
        <div>
          <h2>
            Portfolio<span style={{ color: "red" }}>.</span>
          </h2>
        </div>
        <div>
          <ul className="tabs">
            <li>
              <h3>Project</h3>
            </li>
            <li>
              <h3>Service</h3>
            </li>
            <li>
              <h3>Contact Me</h3>
            </li>
          </ul>
        </div>
        <div>
          <ul className="icons">
            <li>
              <a href="https://github.com/yashsuthar010" target="_blank">
                <AiFillGithub />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/yash-suthar005/"
                target="_blank"
              >
                <FiLinkedin />
              </a>
            </li>
            <li>
              <a href="gvice008@gmail.com" target="_blank">
                <SiMinutemailer />
              </a>
            </li>
            <li>
              <a href="https://twitter.com/YashSut95822902" target="_blank">
                <AiFillTwitterCircle />
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Nav;
