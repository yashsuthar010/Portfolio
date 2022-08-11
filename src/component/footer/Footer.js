import React from "react";
import "./footer.css";
import { AiFillGithub, AiFillTwitterCircle } from "react-icons/ai";
import { FiLinkedin } from "react-icons/fi";
import { MdEmail } from "react-icons/md";

import { CgChevronDoubleUpR } from "react-icons/cg";

const Footer = () => {
  return (
    <>
      <hr />
      <div className="footer">
        <div>
          <h2>Yash</h2>
        </div>
        <div id="backtotop">
          <CgChevronDoubleUpR style={{ color: "white", fontSize: "40px" }} />
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
                <MdEmail />
              </a>
            </li>
            <li>
              <a href="https://twitter.com/YashSut95822902" target="_blank">
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
