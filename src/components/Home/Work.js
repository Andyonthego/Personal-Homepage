import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Philips from "../../Assets/philips.png";
import Bosch from "../../Assets/bosch.png";
import Intel from "../../Assets/intel.png";
import Msft from "../../Assets/microsoft.png";

function Work() {
  return (
    <Container fluid className="about-section" id="education">
      <Container>
      <Row>
          <Col>
            <h1 className="purple" style={{ textAlign: "center" }}>
              Work Experience
            </h1>
          </Col>
        </Row>
        <Row style={{ marginTop: '40px' }}>
            <Col md={4}>
              <img
                src={Msft}
                alt="msft"
                className="img-fluid"
                style={{ maxHeight: "200px" }}
              />
            </Col>
            <Col md={6} className="school-experience">
            <h1 style={{ textAlign: "left", marginLeft:'120px'}} className="home-about-body">
                TBD
            </h1>
            </Col>
        </Row>
        <Row style={{ marginTop: '40px' }}>
            <Col md={4} >
              <img
                src={Intel}
                alt="intel"
                className="img-fluid"
                style={{ maxHeight: "150px" }}
              />
            </Col>
            <Col md={6} className="school-experience">
            <h1 style={{ textAlign: "left", marginLeft:'120px'}} className="home-about-body">
                Software Developer
            </h1>
            </Col>
        </Row>
        <Row style={{ marginTop: '40px' }}>
            <Col md={4} >
              <img
                src={Bosch}
                alt="bosch"
                className="img-fluid"
                style={{ maxWidth: "300px", marginTop:'40px' }}
              />
            </Col>
            <Col md={6} className="school-experience">
            <h1 style={{ textAlign: "left", marginLeft:'120px'}} className="home-about-body">
                Software Developer
            </h1>
            </Col>
        </Row>
        <Row style={{ marginTop: '40px' }}>
            <Col md={4} >
              <img
                src={Philips}
                alt="philips"
                className="img-fluid"
                style={{ maxHeight: "200px" }}
              />
            </Col>
            <Col md={6} className="school-experience">
            <h1 style={{ textAlign: "left", marginLeft:'120px'}} className="home-about-body">
                Software Developer
            </h1>
            </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Work;
