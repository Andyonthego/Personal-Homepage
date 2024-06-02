import React from "react";
import { Col, Row } from "react-bootstrap";
import { FaVuejs } from "react-icons/fa";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiPython,
  DiGit,
  DiJava,
  DiRedis,
  DiMysql,
  DiPostgresql,
  DiCss3,
  DiHtml5
} from "react-icons/di";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons" data-name="Python">
        <DiPython />
      </Col>
      <Col xs={4} md={2} className="tech-icons" data-name="Java">
        <DiJava />
      </Col>
      <Col xs={4} md={2} className="tech-icons" data-name="JavaScript">
        <DiJavascript1 />
      </Col>
      <Col xs={4} md={2} className="tech-icons" data-name="CSS">
        <DiCss3 />
      </Col>
      <Col xs={4} md={2} className="tech-icons" data-name="HTML">
        <DiHtml5 />
      </Col>

      <Col xs={4} md={2} className="tech-icons" data-name="React">
        <DiReact />
      </Col>
      <Col xs={4} md={2} className="tech-icons" data-name="Vue">
        <FaVuejs/>
      </Col>
      <Col xs={4} md={2} className="tech-icons" data-name="Node.js">
        <DiNodejs />
      </Col>
      
      <Col xs={4} md={2} className="tech-icons" data-name="Git">
        <DiGit />
      </Col>
      <Col xs={4} md={2} className="tech-icons" data-name="Redis">
        <DiRedis />
      </Col>
      <Col xs={4} md={2} className="tech-icons" data-name="MySQL">
        <DiMysql />
      </Col>
      <Col xs={4} md={2} className="tech-icons" data-name="PostgreSQL">
        <DiPostgresql />
      </Col>

    </Row>
  );
}

export default Techstack;
