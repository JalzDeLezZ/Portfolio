import React from "react";
import ME from "../../assets/Jalz.png";
import { FaAward, FaUsers, FaRegFolderOpen } from "react-icons/fa";
import "./styles/about.scss";
import "./styles/softSkills.scss";
import { BsCheck2Circle } from "react-icons/bs";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <figure className="about__me-image">
            <img src="https://i.ibb.co/h7z03gZ/Jalz.png" alt="AboutImage" />
            <article className="service">
              <div className="service__head">
                <h3>Soft Skills</h3>
              </div>
              <ul className="service__list">
                <li>
                  <BsCheck2Circle className="service__list-icon" />
                  <p>Self Taught</p>
                </li>
                <li>
                  <BsCheck2Circle className="service__list-icon" />
                  <p>Collaborative</p>
                </li>
                <li>
                  <BsCheck2Circle className="service__list-icon" />
                  <p>Problem Solving</p>
                </li>
                <li>
                  <BsCheck2Circle className="service__list-icon" />
                  <p>Communicative</p>
                </li>
                <li>
                  <BsCheck2Circle className="service__list-icon" />
                  <p>Adaptability</p>
                </li>
                <li>
                  <BsCheck2Circle className="service__list-icon" />
                  <p>Leadership</p>
                </li>
                <li>
                  <BsCheck2Circle className="service__list-icon" />
                  <p>Planning and Organization</p>
                </li>
              </ul>
            </article>
          </figure>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h4>Experience</h4>
              <small>1+ Year Working</small>
            </article>
            <article className="about__card">
              <FaUsers className="about__icon" />
              <h4>Clients</h4>
              <small>60+ People</small>
            </article>
            <article className="about__card">
              <FaRegFolderOpen className="about__icon" />
              <h4>Projects</h4>
              <small>30+ Completed</small>
            </article>
          </div>
          <p>
            Mucho gusto, soy James, actualmente estoy enfocado en el desarrollo
            web, es una industria enorme, de mucho aprendizaje y un montón de
            herramientas jajja, pero con una mente abierta, nunca parar de
            aprender y dejarse guiar por los que ya recorrieron el camino, creo
            que nada es imposible.
          </p>

          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
