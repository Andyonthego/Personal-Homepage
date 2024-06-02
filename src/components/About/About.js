import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
// import Portrait from "../../Assets/personal_photo.jpg";
// import Tilt from "react-parallax-tilt";

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row>
          <Col>
            <h1 className="purple" style={{ textAlign: "center" }}>
              Projects
            </h1>
          </Col>
        </Row>
        <Row>
          <br />
          <br />
          <br />
        </Row>
        <h1 className="purple">
          Tech Stack
        </h1>
        <br />
        <Techstack />

      </Container>
    </Container>
  );
}

export default About;
