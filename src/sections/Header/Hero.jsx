import React from "react";
import heroImage from "../../assets/hero_image.png";

export const Hero = () => {
  return (
    <section className="hero">
      <img src={heroImage} alt="" />
      <div className="hero-text-part">
        <h2>Financial Tracking Platform</h2>
        <span>Start tracking money with your friends now</span>
        <div className="trynow-btn-container">
          <a href="" className="trynow-btn">
            Try now
          </a>
        </div>
      </div>
    </section>
  );
};
