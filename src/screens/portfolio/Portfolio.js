import React, { useState } from "react";
import "./portfolio.css";
import portfolioData from "../../helpers/portfolioData";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Modal from "react-bootstrap/Modal";
import { Fade } from "react-awesome-reveal";
function Portfolio() {
  const [modelShow, setModelShow] = useState(false);
  const [tempData, setTempData] = useState([]);

  function createModal(data) {
    return (
      <Modal
        show={modelShow}
        onHide={() => setModelShow(false)}
        size="lg"
        arial-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header>
          <Modal.Title id="contained-modal-title-vcenter">
            {data.desc}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>{data.summary}</p>
          <Image
            src={data.image}
            style={{ width: "470px", alignItems: "center" }}
          />
        </Modal.Body>
        <a
          id="portfolio-modal-link"
          href={data.link}
          target="_blank"
          rel="noreferrer"
        >
          Go to the repo
        </a>
        <Modal.Footer>
          <div>Technologies used:</div>
          <p style={{ fontSize: "0.9rem", marginRight: "auto" }}>
            {" "}
            {data.tech}
          </p>
          <Button onClick={() => setModelShow(false)}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }

  const mapped = portfolioData.map((e, idx) => {
    return (
      <Card key={idx} id="portfolio-card-container">
        <Image
          className="portfolio-image"
          onClick={() => {
            setTempData({
              image: e.image,
              link: e.link,
              desc: e.desc,
              summary: e.summary,
              tech: e.tech,
            });
            setModelShow(true);
          }}
          src={e.image}
        />
        <div className="portfolio-click-info">&#x1F50E;&#xFE0E;</div>
        {createModal(tempData)}
      </Card>
    );
  });

  return (
    <div className="portfolio-main-container" id="portfolio">
      <h1>PORTFOLIO</h1>

      <Container fluid="id" style={{ padding: "2rem 0" }}>
        <Fade direction="up" duration={2700} triggerOnce="true">
          <Row>{mapped}</Row>
        </Fade>
      </Container>
    </div>
  );
}

export default Portfolio;
