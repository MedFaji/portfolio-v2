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
          I'm <span className="intro-name">Mohamed Faji</span> <br /> Junior
          Software Developer
        </span>
        <p className="intro-para">
          Recent Master's graduate in Information Systems Engineering and Junior
          Software Developer with a focus on
          <b> Java, React, and the MERN stack</b>. Passionate about innovation
          and committed to delivering top-notch web experiences through hands-on
          project work. Eager to make an impact through excellence in code.
        </p>
        <Link to="contact">
          <button className="btn">
            <img src={btn_img} alt="" className="btn-img" />
            Hire me
          </button>
        </Link>
      </div>
      {/* <img src={bg} alt="Profile" className="bg" /> */}
    </section>
  );
};

export default Intro;
