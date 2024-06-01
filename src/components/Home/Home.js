import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.png";
import Particle from "../Particle";
// import Type from "./Type";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row style={{ marginTop: '-80px' }}>
            <Col md={7} className="home-header">
              <h1 style={{ textAlign: "left" }} className="heading">
                Hi!{" "}
                <span className="emoji" role="img" aria-labelledby="wave">
                  😊
                </span>
                {"    "}It's
                <strong className="main-name"> Andrea. </strong>
              </h1>
              <p className="home-about-body" style={{textAlign: "left"}}>
              I'm a Master of Professional Computer Science student in 
              <i>
                <b className="purple"> Simon Fraser University. </b>
              </i>
              <br />
              <br />
              I'm a Full Stack Developer, a Data Engineer, and a Machine Learning enthusiast.
            </p>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
    </section>
  );
}

export default Home;
