import { useState } from "react";
import "./style.css";
import { Navbar } from "./sections/Header/Navbar";
import { Hero } from "./sections/Header/Hero";
import { Intro } from "./sections/Content/Intro";
import { About } from "./sections/Content/About";

function App() {
  return (
    <div className="app">
      <header>
        <Navbar />
        <Hero />
      </header>
      <Intro />
      <About />
      <footer>Copyright © 2023 All rights are reserverd</footer>
    </div>
  );
}

export default App;
