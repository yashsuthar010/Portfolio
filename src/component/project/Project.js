import React from "react";
import "./project.css";
import hacker from "../../assests/hacker.png";
import leet from "../../assests/leet.png";

const Project = () => {
  return (
    <>
      <div className="project">
        <div className="project-container">
          <div className="project-bg">
            <h1>Project</h1>
            <div className="container2">
              <div className="card">
                <div className="content1">
                  <div className="imgBx">
                    <img src={hacker} />
                  </div>
                  <div className="contentBx">
                    <h3>SpeakandHear</h3>
                  </div>
                </div>
                <ul className="sci">
                  <a
                    href="https://www.hackerrank.com/ysuthar071"
                    target="_blank"
                  >
                    <button className="project-btn">View</button>
                  </a>
                </ul>
              </div>
              <div className="card">
                <div className="content1">
                  <div className="imgBx">
                    <img src={hacker} />
                  </div>
                  <div className="contentBx">
                    <h3>ScolarPortal</h3>
                  </div>
                </div>
                <ul className="sci">
                  <a
                    href="https://www.hackerrank.com/ysuthar071"
                    target="_blank"
                  >
                    <button className="project-btn">View</button>
                  </a>
                </ul>
              </div>
              <div className="card">
                <div className="content1">
                  <div className="imgBx">
                    <img src={hacker} />
                  </div>
                  <div className="contentBx">
                    <h3>TourandTravel</h3>
                  </div>
                </div>
                <ul className="sci">
                  <a
                    href="https://www.hackerrank.com/ysuthar071"
                    target="_blank"
                  >
                    <button className="project-btn">View</button>
                  </a>
                </ul>
              </div>
              <div className="card">
                <div className="content1">
                  <div className="imgBx">
                    <img src={hacker} />
                  </div>
                  <div className="contentBx">
                    <h3>AlgoVisualizer</h3>
                  </div>
                </div>
                <ul className="sci">
                  <a
                    href="https://www.hackerrank.com/ysuthar071"
                    target="_blank"
                  >
                    <button className="project-btn">View</button>
                  </a>
                </ul>
              </div>
              <div className="card">
                <div className="content1">
                  <div className="imgBx">
                    <img src={hacker} />
                  </div>
                  <div className="contentBx">
                    <h3>pythonApplication</h3>
                  </div>
                </div>
                <ul className="sci">
                  <a
                    href="https://www.hackerrank.com/ysuthar071"
                    target="_blank"
                  >
                    <button className="project-btn">View</button>
                  </a>
                </ul>
              </div>
              <div className="card">
                <div className="content1">
                  <div className="imgBx">
                    <img src={leet} />
                  </div>
                  <div className="contentBx">
                    <h3>Leetcode</h3>
                  </div>
                </div>
                <ul className="sci">
                  <a href="https://leetcode.com/ysuthar071/" target="_blank">
                    <button>View</button>
                  </a>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Project;
