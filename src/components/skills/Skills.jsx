import React from "react";
import "./skills.css";
import Backend from "./Backend"; 
import Frontend from "./Frontend";
import Database from "./Database";
import App from "./App";
import Aiml from "./Aiml";
const Skills = () => {
  return (
    <section className="skills section" id="skills">
      <h2 className="section__title">Skills</h2>
      <span className="section__subtitle">My Technical Level</span>

      <div className="skills__container container grid">
        <Aiml/>
        <Frontend/>
        <Backend />
        <Database/>
        <App/>

      </div>
    </section>
  );
};

export default Skills;
