import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Beng from "../../Assets/SEU.jpg";
import Msc from "../../Assets/SFU.jpg";

function Education() {
  return (
    <Container fluid className="about-section" id="education">
      <Container>
      <Row>
          <Col>
            <h1 className="purple" style={{ textAlign: "center" }}>
              Education
            </h1>
          </Col>
        </Row>
        <Row style={{ marginTop: '40px' }}>
            <Col md={4}>
              <img
                src={Msc}
                alt="graduate"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </Col>
            <Col md={6} className="school-experience">
            <h1 style={{ textAlign: "left", marginLeft:'120px'}} className="home-about-body">
                Master of Professional Computer Science
            </h1>
            </Col>
        </Row>
        <Row style={{ marginTop: '40px' }}>
            <Col md={4} >
              <img
                src={Beng}
                alt="undergraduate"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </Col>
            <Col md={6} className="school-experience">
            <h1 style={{ textAlign: "left", marginLeft:'120px'}} className="home-about-body">
                Bachelor of Engineering
            </h1>
            </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Education;
