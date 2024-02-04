import React from "react";
import "./Works.css";
import portfolio1 from "../../assets/portfolio-1.png";
import portfolio2 from "../../assets/portfolio-2.png";
import portfolio3 from "../../assets/portfolio-3.png";
import portfolio4 from "../../assets/portfolio-4.png";
import portfolio5 from "../../assets/portfolio-5.png";
import portfolio6 from "../../assets/portfolio-6.png";

const Works = () => {
  return (
    <section id="works">
      <h2 className="works-title">Portfolio</h2>
      <span className="works-desc">
        Showcasing a portfolio of dynamic projects that reflect my passion for
        innovation and commitment to delivering impactful solutions.
      </span>
      <div className="works-images">
        <img src={portfolio1} alt="" className="works-img" />
        <img src={portfolio2} alt="" className="works-img" />
        <img src={portfolio3} alt="" className="works-img" />
        <img src={portfolio4} alt="" className="works-img" />
        <img src={portfolio5} alt="" className="works-img" />
        <img src={portfolio6} alt="" className="works-img" />
      </div>

      <button className="works-btn">Explore more</button>
    </section>
  );
};

export default Works;
