import React, { useEffect } from "react";
import "../styles/Particles.css";
const Particles = () => {
  useEffect(() => {
    const particlesContainer = document.getElementById("particles");
    if (!particlesContainer) return;

    const particleCount = 50;

    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement("div");
      particle.classList.add("particle");
      particle.style.left = Math.random() * 100 + "%";
      particle.style.animationDelay = Math.random() * 6 + "s";
      particle.style.animationDuration = Math.random() * 3 + 3 + "s";
      particlesContainer.appendChild(particle);
    }

    return () => {
      if (particlesContainer) {
        particlesContainer.innerHTML = "";
      }
    };
  }, []);

  return <div className="particles" id="particles"></div>;
};

export default Particles;