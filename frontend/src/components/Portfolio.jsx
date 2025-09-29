import React, { useState, useEffect } from "react";
import Navigation from "./Navigation";
import Hero from "./Hero";
import About from "./About";
import Skills from "./Skills";
import Services from "./Services";
import Projects from "./Projects";
import Education from "./Education";
import Contact from "./Contact";
import Footer from "./Footer";
import Loader from "./Loader";
import Particles from "./Particles";
import "../styles/Portfolio.css";

const Portfolio = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="portfolio-container">
      <Particles />
      <Navigation />
      <Hero />
      <About />
      <Skills />
      <Services />
      <Projects />
      <Education />
      <Contact />
      <Footer />
    </div>
  );
};

export default Portfolio;