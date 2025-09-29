// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "@fortawesome/fontawesome-free/css/all.min.css";


// Global Layout Components
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

// Pages / Sections
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Contact from "./components/Contact";


function App() {
  return (
    <Router>
      <div className="app">
        {/* Global Navigation */}
        <Navigation />

        {/* Main Routing Logic */}
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <About />
                <Skills />
                <Services />
                <Projects />
                <Education />
                <Contact />
              </>
            }
          />
          {/* Add individual routes for pages if needed */}
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/services" element={<Services />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/education" element={<Education />} />
          <Route path="/contact" element={<Contact />} />

        
        </Routes>

        {/* Footer */}
        <Footer />

        {/* Toast Notifications */}
        <ToastContainer position="top-right" autoClose={3000} />
      </div>
    </Router>
  );
}

export default App;
