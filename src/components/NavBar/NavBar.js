import React, { useState } from "react";
import { Link } from "react-scroll";
import logo from "../../assets/logo.png";
import contact_img from "../../assets/contact.png";
import menu from "../../assets/menu.png";
import "./NavBar.css";

const NavBar = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div className="navbar">
      <img src={logo} className="logo" alt="Logo" />
      <div className="desktop-menu">
        <Link
          activeClass="active"
          to="intro"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="desktop-menu-list-item"
        >
          Home
        </Link>
        <Link
          activeClass="active"
          to="skills"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          className="desktop-menu-list-item"
        >
          About
        </Link>
        <Link
          activeClass="active"
          to="works"
          spy={true}
          smooth={true}
          offset={-90}
          duration={500}
          className="desktop-menu-list-item"
        >
          Portfolio
        </Link>
        {/* <Link
          activeClass="active"
          to="clients"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="desktop-menu-list-item"
        >
          Clients
        </Link> */}
      </div>

      <button
        className="desktop-menu-btn"
        onClick={() => {
          document
            .getElementById("contact")
            .scrollIntoView({ behavior: "smooth" });
        }}
      >
        <img src={contact_img} className="desktop-menu-img" alt="Logo" />
        <span>Contact me</span>
      </button>

      <img
        src={menu}
        className="mob-menu"
        alt="Logo"
        onClick={() => {
          setShowMenu(!showMenu);
        }}
      />
      <div className="nav-menu" style={{ display: showMenu ? "flex" : "none" }}>
        <Link
          activeClass="active"
          to="intro"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="list-item"
          onClick={() => {
            setShowMenu(false);
          }}
        >
          Home
        </Link>
        <Link
          activeClass="active"
          to="skills"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          className="list-item"
          onClick={() => {
            setShowMenu(false);
          }}
        >
          About
        </Link>
        <Link
          activeClass="active"
          to="works"
          spy={true}
          smooth={true}
          offset={-90}
          duration={500}
          className="list-item"
          onClick={() => {
            setShowMenu(false);
          }}
        >
          Portfolio
        </Link>
        {/* <Link
          activeClass="active"
          to="clients"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="list-item"
          onClick={() => {
            setShowMenu(false);
          }}
        >
          Clients
        </Link> */}
        <Link
          activeClass="active"
          to="contact"
          spy={true}
          smooth={true}
          offset={-140}
          duration={500}
          className="list-item"
          onClick={() => {
            setShowMenu(false);
          }}
        >
          Contact
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
