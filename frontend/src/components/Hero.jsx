import React, { useState } from "react";
import "../styles/Hero.css";

const Hero = () => {
  const [downloading, setDownloading] = useState(false);

  const socialLinks = [
    {
      icon: "fab fa-linkedin-in",
      url: "https://www.linkedin.com/in/ali-mughal-9bb661343",
      label: "LinkedIn",
    },
    {
      icon: "fab fa-github",
      url: "https://github.com/AliMughal41",
      label: "GitHub",
    },
    {
      icon: "fab fa-twitter",
      url: "https://x.com/AliMugh001",
      label: "Twitter",
    },
    {
      icon: "fab fa-instagram",
      url: "https://www.instagram.com/itss_ali_22",
      label: "Instagram",
    },
    {
      icon: "fab fa-facebook",
      url: "https://www.facebook.com/share/1AempqxJ1G/",
      label: "Facebook",
    },
  ];

  const handleDownloadCV = async () => {
    try {
      setDownloading(true);

      // Method 1: Simple window.open (Recommended - Works with IDM)
      window.open("http://localhost:4000/api/v1/cv/download", "_blank");

      setDownloading(false);
    } catch (error) {
      console.error("Download error:", error);
      alert("Failed to download CV. Please try again.");
      setDownloading(false);
    }
  };

  // Alternative method using fetch (if simple method doesn't work)
  const handleDownloadCVWithFetch = async () => {
    try {
      setDownloading(true);

      const response = await fetch("http://localhost:4000/api/v1/cv/download");

      if (!response.ok) {
        throw new Error("Download failed");
      }

      // Get the blob from response
      const blob = await response.blob();

      // Create a download link
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = "Muhammad_Ali_CV.pdf";
      document.body.appendChild(link);
      link.click();

      // Cleanup
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);

      setDownloading(false);
    } catch (error) {
      console.error("Download error:", error);
      alert("Failed to download CV. Please try again.");
      setDownloading(false);
    }
  };

  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <h3>Hello, I'm</h3>
          <h1>Muhammad Ali</h1>
          <div className="subtitle">Full Stack Developer</div>
          <p>
            I'm a passionate Full Stack Developer specializing in creating
            exceptional digital experiences through modern web technologies
            (MERN Stack) and innovative mobile solutions (Flutter). Building
            scalable applications with clean code and optimal performance.
          </p>

          <div className="hero-buttons">
            {/* Download CV Button */}
            <button
              onClick={handleDownloadCV}
              className="btn-primary"
              disabled={downloading}
            >
              {downloading ? "Downloading..." : "Download CV"}
            </button>

            {/* Social Icons */}
            <div className="social-icons">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                >
                  <i className={social.icon}></i>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Profile Image Section */}
        <div className="hero-image">
          <div className="profile-container">
            <div className="profile-ring"></div>
            <img
              src="/image3.png"
              alt="Muhammad Ali"
              className="profile-img"
            />
            <div className="floating-elements">
              <div className="floating-element"></div>
              <div className="floating-element"></div>
              <div className="floating-element"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;