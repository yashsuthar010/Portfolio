import React from "react";
import "./footer.css";
import { AiFillGithub, AiFillTwitterCircle } from "react-icons/ai";
import { FiLinkedin } from "react-icons/fi";
import { MdEmail } from "react-icons/md";
import logo from "../../assests/logo.png";

import { CgChevronDoubleUpR } from "react-icons/cg";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div id="logo">
          <img src={logo}></img>
        </div>
        <div id="backtotop">
          <CgChevronDoubleUpR style={{ color: "black", fontSize: "50px" }} />
        </div>
      </div>
    </>
  );
};

export default Footer;
