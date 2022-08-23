import React from "react";
import "./footer.css";

import logo from "../../assests/logo.png";
import up from "../../assests/up.png";

import { CgChevronDoubleUpR } from "react-icons/cg";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div id="logo">
          <img src={logo}></img>
        </div>
        <div id="backtotop">
          <img src={up}></img>
        </div>
      </div>
    </>
  );
};

export default Footer;
