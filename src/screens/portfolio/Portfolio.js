import { useState } from "react";
import "./portfolio.css";
import portfolioData from "../../helpers/portfolioData";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import Modal from "react-bootstrap/Modal";
import { Fade } from "react-awesome-reveal";

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
              <a
                className="modal-linkedin-link"
                href={data.linkedinPost}
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn Post →
              </a>
            )}
            <a
              className="modal-repo-link"
              href={data.link}
              target="_blank"
              rel="noreferrer"
            >
              View Repository →
            </a>
            <Button variant="secondary" onClick={() => setModelShow(false)}>
              Close
            </Button>
          </div>
        </Modal.Footer>
      </Modal>
    );
  }

  return (
    <div className="portfolio-main-container" id="portfolio">
      <div className="portfolio-header">
        <h1 className="portfolio-title">Portfolio</h1>
        <p className="portfolio-subtitle">Showcasing my work and projects</p>
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
          </Fade>
        ))}
      </div>
      
      {createModal(tempData)}
    </div>
  );
}

export default Portfolio;
