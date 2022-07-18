import React from "react";
import "./TwoHeader.scss";
import Invoker from "../../../assets/MY-INVOKER.gif";
import HeaderSocial from "./HeaderSocial";
import CTA from "./CTA";

const HeaderTwo = () => {
  return (
    <header id="iHeader" className="Comp-Header">
      <section className="H-One">
        <article className="One-text">
          <h5>Don't Worry Be Happy, The Life is Very Funny</h5>
          <h1>Hi There ヅ</h1>
          <h4>I'm Ready to Code</h4>
        </article>
      </section>
      <section className="H-Two">
        <figure>
          <img src={Invoker} alt="James Jalz" />
        </figure>
        <div className="acount">
          <CTA />
          <HeaderSocial />

          <a href="#contact" className="scroll__down">
            <h3>CONTACT</h3>
          </a>
        </div>
      </section>
    </header>
  );
};

export default HeaderTwo;
