import React from "react";
import { expriences } from "../../helpers/exprienceArray";
import { Fade } from "react-awesome-reveal";
import "./exprience.css";

export default function Exprience() {
  return (
    <div className="experience-container" id="experience">
      <div className="experience-header">
        <h1 className="experience-title">Professional Experience</h1>
        <p className="experience-subtitle">My journey in building impactful software solutions</p>
      </div>

      <div className="experience-timeline">
        {expriences.map((e, idx) => {
          return (
            <Fade 
              key={idx}
              direction="up" 
              duration={1000} 
              delay={idx * 100}
              triggerOnce={true}
            >
              <div className="experience-card">
                <div className="experience-card-header">
                  <div className="company-info">
                    <img
                      src={e.logo}
                      alt={`${e.companyName} logo`}
                      className="company-logo"
                    />
                    <div className="company-details">
                      <h3 className="company-name">{e.companyName}</h3>
                      <p className="company-duration">{e.timeSpent}</p>
                      <p className="company-location">{e.location}</p>
                    </div>
                  </div>
                </div>
                <div className="experience-card-body">
                  <h4 className="position-title">{e.position}</h4>
                  <p className="employment-type">{e.type}</p>
                  <p className="job-description">{e.description}</p>
                </div>
              </div>
            </Fade>
          );
        })}
      </div>
    </div>
  );
}
