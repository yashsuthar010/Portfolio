import React from "react";
import "./footer.css";
import { AiFillGithub, AiFillTwitterCircle } from "react-icons/ai";
import { FiLinkedin } from "react-icons/fi";
import { SiMinutemailer } from "react-icons/si";
import { CgChevronDoubleUpR } from "react-icons/cg";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div>
          <h2>Yash</h2>
        </div>
        <div>
          <CgChevronDoubleUpR style={{ color: "white", fontSize: "40px" }} />
        </div>
        <div>
          <ul className="icons">
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
          </ul>
        </div>
      </div>
    </>
  );
};

export default Footer;
