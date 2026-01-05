import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { navigationLinks } from "../../helpers/navigationLinks";
import MagneticButton from "../../components/MagneticButton";
import "./navigationBar.css";

function createLinks() {
  return navigationLinks.map((e, idx) => {
    return (
      <MagneticButton key={idx} strength={0.3} radius={80}>
        <Nav.Link href={e.ref}>
          {e.name}
        </Nav.Link>
      </MagneticButton>
    );
  });
}

function NavigationBar() {
  return (
    <div id="home">
      <Navbar
        className="navigation-container"
        style={{
          zIndex: "2",
          position: "fixed",
          top: "0",
          width: "100%",
        }}
        collapseOnSelect
        expand="md"
      >
        <MagneticButton strength={0.25} radius={100}>
          <Navbar.Brand style={{ marginLeft: "1rem" }} href="#home">
            Andrawes Aisr
          </Navbar.Brand>
        </MagneticButton>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse
          style={{
            justifyContent: "flex-end",
            marginRight: "1rem",
            borderColor: "none",
          }}
        >
          <Nav className="links" style={{ margin: "0 1rem" }}>
            {createLinks()}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default NavigationBar;
