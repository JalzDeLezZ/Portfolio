import React from "react";
import { BsPatchCheckFill } from "react-icons/bs";
import "./styles/experience.scss";
import "./styles/skills.scss";

import db_skill_front from "../../assets/data/SkillsFront.json";
import db_skill_back from "../../assets/data/SkillsBack.json";
import db_skill_devops from "../../assets/data/SkillsDevOps.json";
import { Autoplay, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/grid";

const Experience = () => {
  return (
    <section id="experience">
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Programming Languages</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>TypeScript</h4>
                <small className="text-light">Current</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>JavaScript</h4>
                <small className="text-light">Current</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>Java</h4>
                <small className="text-light">Current</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>C#</h4>
                <small className="text-light">Disuse</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>PHP</h4>
                <small className="text-light">Disuse</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>Go</h4>
                <small className="text-light">Disuce</small>
              </div>
            </article>
          </div>
        </div>
        {/* =========== END OF FRONTEND =========== */}
        <div className="experience__backend">
          <h3>Databases</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>SQL Server</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>MySQL</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>PostgreSQL</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>MongoDB</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>MariaDB</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>SQLite</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
          </div>
        </div>
      </div>

      {/* ============================================================================================= */}

      <div id="skills">
        <div className="skill-content">
          <h3>Front-end</h3>
          <Swiper
            className="container testimonials__container"
            spaceBetween={21}
            slidesPerView={3}
            autoplay={{
              delay: 900,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            loop={true}
            modules={[Autoplay, Pagination]}
          >
            {db_skill_front.map(({ avatar, name }, index) => {
              return (
                <SwiperSlide key={index} className="testimonial">
                  <div className="client__avatar">
                    <img src={avatar} alt="Avatar One" />
                  </div>
                  <h5 className="client__name">{name}</h5>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
        <div className="skill-content">
          <h3>Back-end</h3>
          <Swiper
            className="container testimonials__container"
            spaceBetween={21}
            slidesPerView={3}
            autoplay={{
              delay: 900,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            loop={true}
            modules={[Autoplay, Pagination]}
          >
            {db_skill_back.map(({ avatar, name }, index) => {
              return (
                <SwiperSlide key={index} className="testimonial">
                  <div className="client__avatar">
                    <img src={avatar} alt="Avatar One" />
                  </div>
                  <h5 className="client__name">{name}</h5>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
        <div className="skill-content">
          <h3>DevOps</h3>
          <Swiper
            className="container testimonials__container"
            spaceBetween={21}
            slidesPerView={3}
            autoplay={{
              delay: 900,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            loop={true}
            modules={[Autoplay, Pagination]}
          >
            {db_skill_devops.map(({ avatar, name }, index) => {
              return (
                <SwiperSlide key={index} className="testimonial">
                  <div className="client__avatar">
                    <img src={avatar} alt="Avatar One" />
                  </div>
                  <h5 className="client__name">{name}</h5>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Experience;
