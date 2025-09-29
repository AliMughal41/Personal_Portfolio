import React from "react";
import "../styles/Loader.css";
const Loader = () => {
  return (
    <div className="loader">
      <div className="loader-content">
        <div className="spinner"></div>
        <p>Loading...</p>
      </div>
    </div>
  );
};

export default Loader;