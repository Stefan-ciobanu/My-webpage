import React from "react";
import "./ProjectPage.css";
import { Container, Row, Col } from "react-bootstrap";
import Image1 from "../HomePage/Image1.jpg";

export default class ProjectPage extends React.Component {
  render() {
    return (
      <Container fluid className="cont-main2 color-change-3x2">
        <Row className="title-about">
          <h1 className="about-align ">
            MY
            <span className="style-me">PORTFOLIO</span>
          </h1>
          <span className="background-title">WORKS</span>
        </Row>
        <Row>
          <Col>
            <ul className="ul-port">
              <li className="port-box">
                WordPress
                <figure className="figure-li-box">
                  <img src="" />
                  <div></div>
                </figure>
              </li>
              <li className="port-box">WordPress</li>
              <li className="port-box">WordPress</li>
              <li className="port-box">WordPress</li>
              <li className="port-box">WordPress</li>
              <li className="port-box">WordPress</li>
            </ul>
          </Col>
        </Row>
      </Container>
    );
  }
}
