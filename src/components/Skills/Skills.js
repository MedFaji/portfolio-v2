import React from "react";
import "./Skills.css";
import ui_design from "../../assets/ui-design.png";
import web_design from "../../assets/website-design.png";
import app_design from "../../assets/app-design.png";
const Skills = () => {
  return (
    <section id="skills">
      <span className="skill-title">What I do</span>
      <span className="skill-desription">
        I'am a Junior Full Stack Web Developer, eager to contribute innovation
        to collaborative projects and embrace the dynamic challenges of the tech
        world.
      </span>

      <div className="skill-bars">
        <div className="skill-bar">
          <img src={web_design} alt="Backend" className="skill-bar-img" />
          <div className="skill-bar-text">
            <h2>Backend Development</h2>
            <p>Simply dummy text of the printing and typesetting industry.</p>
          </div>
        </div>
        <div className="skill-bar">
          <img src={app_design} alt="Frontend" className="skill-bar-img" />
          <div className="skill-bar-text">
            <h2>Frontend Development</h2>
            <p>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.
            </p>
          </div>
        </div>
        <div className="skill-bar">
          <img src={ui_design} alt="UIDesign" className="skill-bar-img" />
          <div className="skill-bar-text">
            <h2>UI/UX design</h2>
            <p>
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
