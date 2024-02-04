import React from "react";
import "./Skills.css";
import ui_design from "../../assets/ui-design.png";
import web_design from "../../assets/website-design.png";
import backend from "../../assets/backend.png";

const Skills = () => {
  return (
    <section id="skills">
      <span className="skill-title">What I do</span>
      <span className="skill-desription">
        Crafting seamless and innovative software solutions for web and mobile
        experiences. Constantly learning and adapting to deliver excellence in
        every code.
      </span>

      <div className="skill-bars">
        <div className="skill-bar">
          <img src={backend} alt="Backend" className="skill-bar-img" />
          <div className="skill-bar-text">
            <h2>Backend Development</h2>
            <p>
              Building robust and scalable backend solutions for optimal
              performance and functionality.
            </p>
          </div>
        </div>
        <div className="skill-bar">
          <img src={web_design} alt="Frontend" className="skill-bar-img" />
          <div className="skill-bar-text">
            <h2>Frontend Development</h2>
            <p>
              Designing and making captivating user interfaces with a focus on
              seamless functionality and engaging user experiences.
            </p>
          </div>
        </div>
        <div className="skill-bar">
          <img src={ui_design} alt="UIDesign" className="skill-bar-img" />
          <div className="skill-bar-text">
            <h2>UI/UX design</h2>
            <p>
              Elevating digital interactions through intuitive UI/UX design,
              creating user-centric experiences that resonate.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
