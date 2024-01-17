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
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit, alias. Ducimus atque minima, omnis temporibus dignissimos fugiat dolor sed, laudantium ratione maiores sequi voluptas, asperiores nobis perspiciatis rerum cumque! Modi?
      </span>
      <div className="skillBars">
        <div className="skillBar">
            <img src={UIDesign} alt="" className="skillBarImg" />
            <div className="skillBarText">
                <h2>UI/UX Design</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, nobis.</p>
            </div>
        </div>
      </div>

      <div className="skillBars">
        <div className="skillBar">
            <img src={WebDesign} alt="" className="skillBarImg" />
            <div className="skillBarText">
                <h2>Website Design</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, temporibus!</p>
            </div>
        </div>
      </div>

      <div className="skillBars">
        <div className="skillBar">
            <img src={AppDesign} alt="" className="skillBarImg" />
            <div className="skillBarText">
                <h2>App Design</h2>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam, deleniti.</p>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
