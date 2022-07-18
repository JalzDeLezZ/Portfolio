import React, { useState } from "react";
import { AiOutlineHome, AiOutlineUser, AiOutlineBook } from "react-icons/ai";
import { RiMessage3Line } from "react-icons/ri";
import "./styles/nav.scss";
const Nav = () => {
  const [activeNav, setActiveNav] = useState("#");
  return (
    <nav>
      <ul>
        <li>
          <a
            href="#"
            onClick={() => {
              setActiveNav("#");
            }}
            className={activeNav === "#" ? "active" : ""}
          >
            <AiOutlineHome />
          </a>
        </li>
        <li>
          <a
            href="#about"
            onClick={() => {
              setActiveNav("#about");
            }}
            className={activeNav === "#about" ? "active" : ""}
          >
            <AiOutlineUser />
          </a>
        </li>
        <li>
          <a
            href="#experience"
            onClick={() => {
              setActiveNav("#experience");
            }}
            className={activeNav === "#experience" ? "active" : ""}
          >
            <AiOutlineBook />
          </a>
        </li>
        <li>
          <a
            href="#contact"
            onClick={() => {
              setActiveNav("#contact");
            }}
            className={activeNav === "#contact" ? "active" : ""}
          >
            <RiMessage3Line />
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
