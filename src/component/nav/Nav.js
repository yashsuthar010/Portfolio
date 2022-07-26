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
              <AiFillGithub />
            </li>
            <li>
              <FiLinkedin />
            </li>
            <li>
              <SiMinutemailer />
            </li>
            <li>
              <AiFillTwitterCircle />
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Nav;
