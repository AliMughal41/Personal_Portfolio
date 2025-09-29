import React from "react";
import "../styles/Footer.css";


const Footer = () => {
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
      icon: "fab fa-facebook-f",
      url: "https://www.facebook.com/share/1AempqxJ1G/",
      label: "Facebook",
    },
  ];

  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Social Media Links */}
        <div className="social-links">
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

        {/* Footer Text */}
        <p className="footer-text">
          &copy; {currentYear} Muhammad Ali. All rights reserved. Built with{" "}
          <span style={{ color: "#ff0000" }}>❤</span> and MERN Stack
        </p>
      </div>
    </footer>
  );
};

export default Footer;
