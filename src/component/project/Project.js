import React from "react";
import "./project.css";
import algo from "../../assests/algo.png";
import news from "../../assests/news.png";
import portal from "../../assests/portal.png";
import travel from "../../assests/travel.png";
import port from "../../assests/port.png";

const Project = () => {
  return (
    <>
      <div className="project ">
        <div className="project-container">
          <h1>Project</h1>
          <div className="container2 ">
            <div className="card">
              <div className="content1">
                <div className="imgBx">
                  <img src={news} />
                </div>
                <div className="contentBx">
                  <h3>SpeakandHear</h3>
                </div>
              </div>
              <ul className="sci">
                <a
                  href="https://github.com/yashsuthar010/SpeakandHear-with-Reactjs"
                  target="_blank"
                >
                  <button className="project-btn">View</button>
                </a>
              </ul>
            </div>
            <div className="card">
              <div className="content1">
                <div className="imgBx">
                  <img src={[portal]} />
                </div>
                <div className="contentBx">
                  <h3>StudentPortal</h3>
                </div>
              </div>
              <ul className="sci">
                <a
                  href="https://github.com/yashsuthar010/StudentPortal"
                  target="_blank"
                >
                  <button className="project-btn">View</button>
                </a>
              </ul>
            </div>
            <div className="card">
              <div className="content1">
                <div className="imgBx">
                  <img src={travel} />
                </div>
                <div className="contentBx">
                  <h3>TourandTravel</h3>
                </div>
              </div>
              <ul className="sci">
                <a
                  href="https://github.com/yashsuthar010/tourism-web-application"
                  target="_blank"
                >
                  <button className="project-btn">View</button>
                </a>
              </ul>
            </div>
            <div className="card">
              <div className="content1">
                <div className="imgBx">
                  <img src={algo} />
                </div>
                <div className="contentBx">
                  <h3>AlgoVisualizer</h3>
                </div>
              </div>
              <ul className="sci">
                <a href="https://www.hackerrank.com/ysuthar071" target="_blank">
                  <button className="project-btn">View</button>
                </a>
              </ul>
            </div>

            <div className="card">
              <div className="content1">
                <div className="imgBx">
                  <img src={port} />
                </div>
                <div className="contentBx">
                  <h3>Portfolio</h3>
                </div>
              </div>
              <ul className="sci">
                <a
                  href="https://github.com/yashsuthar010/Portfolio"
                  target="_blank"
                >
                  <button className="project-btn">View</button>
                </a>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Project;
