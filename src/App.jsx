import React, { Fragment } from "react";
import About from "./components/Home/About";
import Header from "./components/Home/header/Header";
import Nav from "./components/Home/Nav";
import Experience from "./components/Home/Experience";
import Services from "./components/Home/Services";
import Portfolio from "./components/Home/Portfolio";
import Testimonials from "./components/Home/Testimonials";
import Contact from "./components/Home/Contact";
import Footer from "./components/Home/Footer";

const App = () => {
  return (
    <Fragment>
      <Header />
      <Nav />
      <About />
      <Experience />
      <Services />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer />
    </Fragment>
  );
};

export default App;
