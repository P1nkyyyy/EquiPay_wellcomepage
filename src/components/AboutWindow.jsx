import React from "react";

export const AboutWindow = (props) => {
  return (
    <div className={`about-window ${props.className}`}>
      <span>{props.header}</span>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati
        eaque nisi totam, rem natus distinctio doloribus itaque pariatur. Quia
        consequatur harum dicta est repellendus neque omnis officiis dolorem a
        nemo?
      </p>
    </div>
  );
};
