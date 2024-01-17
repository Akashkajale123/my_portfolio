import React from "react";
import "./Skills.css";
import UIDesign from "../../assets/ui-design.png";
import WebDesign from "../../assets/website-design.png";
import AppDesign from "../../assets/app-design.png";
const Skills = () => {
  return (
    <section id="skills">
      <span className="skillTitle">What I do</span>
      <span className="skillDesc">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod eius earum
        atque voluptate consequuntur quae, molestiae alias soluta eveniet
        incidunt.
      </span>
      <div className="skillBars">
        <div className="skillBar">
            <img src="" alt="" className="skillBarImg" />
            <div className="skillBarText">
                <h2></h2>
                <p></p>
            </div>

            <div className="skillBarText">
                <h2></h2>
                <p></p>
            </div>

            <div className="skillBarText">
                <h2></h2>
                <p></p>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
