import React from "react";
import andrew from "../../images/andrew.jpg";
import { Fade } from "react-awesome-reveal";
import "./aboutMe.css";
function AboutMe() {
  return (
    <div className="about-container" id="about-me">
      <Fade direction="up" duration={1700} triggerOnce="true">
        <div>
          <img src={andrew} alt="me" />
        </div>
      </Fade>
      <Fade direction="right" duration={1700} triggerOnce="true">
        <div className="about-text">
          <h1>ABOUT ME</h1>
          <p>
            I’m a Software Engineer with 1.5 years of experience in software
            development, specializing in building dynamic web applications using
            React.js and Node.js. I have hands-on experience in both front-end
            and back-end development, working on diverse projects that have
            honed my problem-solving and technical skills. I’m proactive,
            continuously improving my expertise, and stay updated with the
            latest tech trends. My passion for technology and commitment to
            delivering impactful solutions make me a valuable asset to any team
            or organization.
          </p>
        </div>
      </Fade>
    </div>
  );
}

export default AboutMe;
