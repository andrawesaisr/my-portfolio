import React from "react";
import andrew from "../../images/andrew.jpg";
import { Fade } from "react-awesome-reveal";
import "./aboutMe.css";

function AboutMe() {
  return (
    <div className="about-container" id="about-me">
      <div className="about-header">
        <h1 className="about-title">About Me</h1>
        <p className="about-tagline">Full-Stack Engineer | Problem Solver | Tech Enthusiast</p>
      </div>

      <div className="about-content">
        <Fade direction="up" duration={1000} triggerOnce={true}>
          <div className="about-image-wrapper">
            <div className="about-image-container">
              <img src={andrew} alt="Andrew" className="about-image" />
            </div>
          </div>
        </Fade>

        <Fade direction="up" duration={1000} delay={200} triggerOnce={true}>
          <div className="about-card">
            <div className="about-card-inner">
              <p className="about-description">
                I'm a <strong>Software Engineer</strong> with 2+ years of experience in software
                development, specializing in building dynamic web applications using
                <strong> React.js, Vue.js, Node.js, and Go</strong>. I have hands-on experience in both front-end
                and back-end development, working on diverse projects that have
                honed my problem-solving and technical skills.
              </p>
              <p className="about-description">
                I'm proactive, continuously improving my expertise, and stay updated with the
                latest tech trends. My passion for technology and commitment to
                delivering impactful solutions make me a valuable asset to any team
                or organization.
              </p>
              <div className="about-highlights">
                <div className="highlight-item">
                  <span className="highlight-number">2+</span>
                  <span className="highlight-label">Years Experience</span>
                </div>
                <div className="highlight-item">
                  <span className="highlight-number">20+</span>
                  <span className="highlight-label">Technologies</span>
                </div>
                <div className="highlight-item">
                  <span className="highlight-number">∞</span>
                  <span className="highlight-label">Learning Mindset</span>
                </div>
              </div>
            </div>
          </div>
        </Fade>
      </div>
    </div>
  );
}

export default AboutMe;
