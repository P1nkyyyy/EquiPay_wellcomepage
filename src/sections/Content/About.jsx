import React from "react";
import { AboutWindow } from "../../components/AboutWindow";
import AppLayout from "../../assets/about/app-layout.png";

export const About = () => {
  return (
    <section className="about">
      <div className="about-header">
        <h2>
          Tracking finances <br /> was never easier
        </h2>
      </div>
      <div className="about-content">
        <img src={AppLayout} alt="" />
        <AboutWindow className="item-1" header="Endless possibilities" />
        <AboutWindow className="item-2" header="Our solution" />
        <AboutWindow className="item-3" header="About us" />
      </div>
    </section>
  );
};
