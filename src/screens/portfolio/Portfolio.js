import { useState } from "react";
import "./portfolio.css";
import portfolioData from "../../helpers/portfolioData";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import Modal from "react-bootstrap/Modal";
import { Fade } from "react-awesome-reveal";
import MagneticButton from "../../components/MagneticButton";

function Portfolio() {
  const [modelShow, setModelShow] = useState(false);
  const [tempData, setTempData] = useState({});

  function createModal(data) {
    return (
      <Modal
        show={modelShow}
        onHide={() => setModelShow(false)}
        size="lg"
        arial-labelledby="contained-modal-title-vcenter"
        centered
        className="portfolio-modal"
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            {data.desc}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p className="modal-summary">{data.summary}</p>
          <Image
            src={data.image}
            className="modal-image"
            fluid
          />
        </Modal.Body>
        <Modal.Footer className="modal-footer-custom">
          <div className="modal-tech-section">
            <strong>Technologies used:</strong>
            <p className="modal-tech-text">{data.tech}</p>
          </div>
          <div className="modal-actions">
            {data.linkedinPost && (
              <MagneticButton strength={0.3} radius={60}>
                <a
                  className="modal-linkedin-link"
                  href={data.linkedinPost}
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn Post →
                </a>
              </MagneticButton>
            )}
            <MagneticButton strength={0.3} radius={60}>
              <a
                className="modal-repo-link"
                href={data.link}
                target="_blank"
                rel="noreferrer"
              >
                View Repository →
              </a>
            </MagneticButton>
            <MagneticButton strength={0.3} radius={60}>
              <Button variant="secondary" onClick={() => setModelShow(false)}>
                Close
              </Button>
            </MagneticButton>
          </div>
        </Modal.Footer>
      </Modal>
    );
  }

  return (
    <div className="portfolio-main-container" id="portfolio">
      <div className="portfolio-header">
        <h1 className="portfolio-title">Selected Work</h1>
        <p className="portfolio-subtitle">
          A curated selection of personal projects. Most of my professional work
          is proprietary and under NDA — these projects showcase my approach to
          problem-solving and code quality.
        </p>
      </div>

      <div className="portfolio-grid">
        {portfolioData.map((e, idx) => (
          <Fade
            key={idx}
            direction="up"
            duration={1000}
            delay={idx * 100}
            triggerOnce={true}
          >
            <MagneticButton strength={0.08} radius={150}>
              <div className="portfolio-card">
                <div
                  className="portfolio-card-inner"
                  onClick={() => {
                    setTempData({
                      image: e.image,
                      link: e.link,
                      desc: e.desc,
                      summary: e.summary,
                      tech: e.tech,
                      linkedinPost: e.linkedinPost,
                    });
                    setModelShow(true);
                  }}
                >
                  <div className="portfolio-image-wrapper">
                    <img
                      className="portfolio-image"
                      src={e.image}
                      alt={e.desc}
                    />
                    <div className="portfolio-overlay">
                      <span className="portfolio-view-icon">🔍</span>
                      <span className="portfolio-view-text">View Details</span>
                    </div>
                  </div>
                  <div className="portfolio-card-content">
                    <h3 className="portfolio-card-title">{e.desc}</h3>
                  </div>
                </div>
              </div>
            </MagneticButton>
          </Fade>
        ))}
      </div>
      
      {createModal(tempData)}
    </div>
  );
}

export default Portfolio;
