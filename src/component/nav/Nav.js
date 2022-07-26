import React, { useEffect } from "react";
import "./nav.css";
import { AiFillGithub, AiFillTwitterCircle } from "react-icons/ai";
import { FiLinkedin } from "react-icons/fi";
import { MdEmail } from "react-icons/md";
import logo from "../../assests/logo.png";

const Nav = () => {
  useEffect(() => {
    window.addEventListener("scroll", isSticky);
    return () => {
      window.removeEventListener("scroll", isSticky);
    };
  });
  const isSticky = (e) => {
    const header = document.querySelector(".header-section");
    const scrollTop = window.scrollY;
    scrollTop >= 250
      ? header.classList.add("is-sticky")
      : header.classList.remove("is-sticky");
  };
  return (
    <>
      <nav className="header-section d-none d-xl-block">
        <div id="logo">
          <img src={logo}></img>
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
      </nav>
    </>
  );
};

export default Nav;
