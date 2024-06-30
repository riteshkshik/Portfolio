import React from "react";
import "./About.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import profile_image from "../../assets/about_profile.svg";

const About = () => {
  return (
    <div className="about">
      <div className="about-title">
        <h1>About me</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="about-sections">
        <div className="about-left">
          <img src={profile_image} alt="" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>
              I am an experienced Frontend Developer with over a decade of
              professional expertise in the field. Throughout my career, I have
              had the privilege of collaborating with prestigious organizations,
              contributing to their success and growth.
            </p>
            <p>
              My passion for frontend development is not only reflected in my
              extensive experience but also in the enthusiasm and dedication I
              bring to each project.
            </p>
          </div>
          <div className="about-skills">
            <div className="about-skill">
              <p>JavaScript</p> <hr style={{ width: "70%" }} />
            </div>
            <div className="about-skill">
              <p>SQL</p> <hr style={{ width: "70%" }} />
            </div>
            <div className="about-skill">
              <p>NodeJs</p> <hr style={{ width: "60%" }} />
            </div>
            <div className="about-skill">
              <p>C++</p> <hr style={{ width: "70%" }} />
            </div>
          </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
          <h1>10+</h1>
          <p>Years of Experience</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>15+</h1>
          <p>Projects Completed</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>14+</h1>
          <p>Happy Clients</p>
        </div>
      </div>
    </div>
  );
};

export default About;
