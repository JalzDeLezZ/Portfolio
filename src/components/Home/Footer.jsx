import React from "react";
import './styles/footer.scss';

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">
        EGATOR
      </a>
      <ul className="permalinks">
        <li>
          <a href="#"> Home </a>
        </li>
        <li>
          <a href="#about"> About </a>
        </li>
        <li>
          <a href="#experience"> Experience </a>
        </li>
        <li>
          <a href="#services"> Services </a>
        </li>
        <li>
          <a href="#portfolio">Portfolio </a>
        </li>
        <li>
          <a href="#testimonials"> Testimonials </a>
        </li>
        <li>
          <a href="#contact"> Contact </a>
        </li>
      </ul>
      {/* <div className="footer__socials">
        <a href="https://facebook.com"> <FaFacebook/> </a>
        <a href="https://instagram.com"> <FaInstagram/> </a>
        <a href="https://twitter.com/JAMESCH42810826"> <FaTwitter/> </a>
      </div> */}

      <h4 className="footer__copyright">
        <small>&copy; James Jalz | All rights reserved.</small>
      </h4>
    </footer>
  );
};

export default Footer;
