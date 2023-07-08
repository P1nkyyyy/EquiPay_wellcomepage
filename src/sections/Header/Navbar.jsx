import React from "react";
import logo from "../../assets/logo.png";

export const Navbar = () => {
  return (
    <nav className="navigation">
      <a href="http://127.0.0.1:5174/">
        <img src={logo} alt="" />
      </a>
      <ul className="menu">
        <li>
          <a href="http://127.0.0.1:5173/register">Register</a>
        </li>
        <li>
          <a href="http://127.0.0.1:5173/login">Login</a>
        </li>
      </ul>
    </nav>
  );
};
