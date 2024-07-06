import React, { useRef, useState } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.svg";
import nav_underline from "../../assets/nav_underline.svg";
import menu_open from "../../assets/menu_open.svg";
import menu_close from "../../assets/menu_close.svg";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const meneRef = useRef();

  const openMenu = () => {
    meneRef.current.style.right = "0"
  }
  const closeMenu = () => {
    meneRef.current.style.right = "-350px"
  }

  return (
    <div className="navbar">
      <img src={logo} alt="" />
      <img src={menu_open} onClick={openMenu} alt="" className="nav-mob-open"/>
      <ul ref={meneRef} className="nav-menu">
        <img src={menu_close} onClick={closeMenu} alt="" className="nav-mob-close" />
        <li>
          {" "}
          <AnchorLink className="anchor-link">
            <p onClick={() => setMenu("home")}>Home</p>
          </AnchorLink>
          {menu === "home" ? <img src={nav_underline} alt="" /> : <></>}
        </li>
        <li>
          {" "}
          <AnchorLink className="anchor-link" offset={50} href="#about">
            <p onClick={() => setMenu("about")}>About Me</p>
          </AnchorLink>
          {menu === "about" ? <img src={nav_underline} alt="" /> : <></>}
        </li>
        <li>
          {" "}
          <AnchorLink className="anchor-link" offset={50} href="#projects">
            <p onClick={() => setMenu("projects")}>Projects</p>
          </AnchorLink>
          {menu === "projects" ? <img src={nav_underline} alt="" /> : <></>}
        </li>
        <li>
          {" "}
          <AnchorLink className="anchor-link" offset={50} href="#portfolio">
            <p onClick={() => setMenu("portfolio")}>Portfolio</p>
          </AnchorLink>
          {menu === "portfolio" ? <img src={nav_underline} alt="" /> : <></>}
        </li>
        <li>
          {" "}
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            <p onClick={() => setMenu("contact")}>Contact</p>
          </AnchorLink>
          {menu === "contact" ? <img src={nav_underline} alt="" /> : <></>}
        </li>
      </ul>
      <AnchorLink className="anchor-link" offset={50} href="#contact">
        <div className="nav-connect">Connect With Me</div>
      </AnchorLink>
    </div>
  );
};

export default Navbar;
