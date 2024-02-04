import React from "react";
import "./Intro.css";
import bg from "../../assets/image.png";
import btn_img from "../../assets/hireme.png";
import { Link } from "react-scroll";

const Intro = () => {
  return (
    <section id="intro">
      <div className="intro-content">
        <span className="hello">Hello,</span>
        <span className="intro-text">
          I'm <span className="intro-name">Mohamed Faji</span> <br /> Full Stack
          Web Developer
        </span>
        <p className="intro-para">
          Recent Master's graduate in Information Systems Engineering and
          aspiring Junior Full Stack Web Developer. Eager to contribute
          innovation to collaborative projects and embrace the dynamic
          challenges of the tech world.
        </p>
        <Link to="contact">
          <button className="btn">
            <img src={btn_img} alt="" className="btn-img" />
            Hire me
          </button>
        </Link>
      </div>
      <img src={bg} alt="Profile" className="bg" />
    </section>
  );
};

export default Intro;
