import React from "react";
import "./styles/services.scss";
import { BsCheck2Circle } from "react-icons/bs";
const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>
          <ul className="service__list">
            <li>
              <BsCheck2Circle className="service__list-icon" />
              <div>
                <h4>AWS</h4>
                <ul>
                  <li>EC2</li>
                  <li>S3</li>
                </ul>
              </div>
            </li>
          </ul>
        </article>

        {/* =========== END A SERVICE =========== */}

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
              <p>Planning and Organization</p>
            </li>
          </ul>
        </article>

        {/* =========== END A SERVICE =========== */}

        <article className="service">
          <div className="service__head">
            <h3>Content Creation</h3>
          </div>
          <ul className="service__list">
            <li>
              <BsCheck2Circle className="service__list-icon" />
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
            </li>
          </ul>
        </article>

        {/* =========== END A SERVICE =========== */}

        <div class="card">
          <div class="card-img"></div>
          <div class="card-info">
            <svg
              height="24"
              width="24"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0 0h24v24H0z" fill="none"></path>
              <path
                d="M4.828 21l-.02.02-.021-.02H2.992A.993.993 0 0 1 2 20.007V3.993A1 1 0 0 1 2.992 3h18.016c.548 0 .992.445.992.993v16.014a1 1 0 0 1-.992.993H4.828zM20 15V5H4v14L14 9l6 6zm0 2.828l-6-6L6.828 19H20v-1.172zM8 11a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"
                fill="currentColor"
              ></path>
            </svg>
            <p class="text-title">Card title</p>
            <p class="text-body">Lorem Ipsum dolor sit amet</p>
            <button class="card-button">Read More</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
