import React, { Fragment, useContext} from "react";
import About from "./components/Home/About";
import Nav from "./components/Home/Nav";
import Experience from "./components/Home/Experience";
import Portfolio from "./components/Home/Portfolio";
import Contact from "./components/Home/Contact";
import Footer from "./components/Home/Footer";
import HeaderTwo from "./components/Home/header/HeaderTwo";
import { FloatingIcon } from "./components/Home/FloatingIcon.jsx";
import ParticlesBckg from "./components/ParticlesBckg";

const App = () => {
  
  
  return (
    <Fragment>
      <ParticlesBckg/>
      <HeaderTwo />
      <Nav />
      <About />
      <Experience />
      <Portfolio />
      <Contact />
      <Footer />
      <FloatingIcon />
    </Fragment>
  );
};

export default App;
