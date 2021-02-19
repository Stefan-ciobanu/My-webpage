import React from "react";
import "./AboutPage.css";
import { Container, Row, Col } from "react-bootstrap";
import { ProgressBar } from "react-bootstrap";

export default class AboutPage extends React.Component {
  render() {
    return (
      <Container fluid className="cont-main color-change-3x">
        <Row className="title-about">
          <h1 className="about-align">
            ABOUT
            <span className="style-me">ME</span>
          </h1>
          <span className="background-title">RESUME</span>
        </Row>

        <Row className="row-align">
          <Col className="col-col-align">
            <Col className="about-info">PERSONAL INFO</Col>
            <Row>
              <Col className="details-col">
                <ul className="ul-style">
                  <li className="li-li-style">
                    First Name:
                    <span className="details-fonts"> Stefan</span>
                  </li>
                  <li className="li-li-style">
                    Last Name:
                    <span className="details-fonts"> Ciobanu</span>
                  </li>
                  <li className="li-li-style">
                    Age:
                    <span className="details-fonts"> 30 Years</span>
                  </li>
                  <li className="li-li-style">
                    Nationality:
                    <span className="details-fonts"> Roumanian</span>
                  </li>
                </ul>
                <button className="button-cv" href="#">
                  DOWNLOAD CV
                </button>
              </Col>
              <Col className="details-col">
                <ul className="ul-style-2">
                  <li className="li-li-style">
                    Address:
                    <span className="details-fonts"> Romania</span>
                  </li>
                  <li className="li-li-style">
                    Phone:
                    <span className="details-fonts"> +04743628198</span>
                  </li>
                  <li className="li-li-style">
                    Email:
                    <span className="details-fonts">
                      {" "}
                      stefan.e.ciobanu@gmail.com
                    </span>
                  </li>
                  <li className="li-li-style">
                    Languages:
                    <span className="details-fonts"> English</span>
                  </li>
                </ul>
              </Col>
            </Row>
          </Col>
          <Col>
            <Row>
              <Col className="col-box-style">
                <div className="box-style">
                  <h3 className="roboto-font">2</h3>
                  <p className="pa-para-style"> YEARS OF EXPERIENCE</p>
                </div>
              </Col>
              <Col className="col-box-style">
                <div className="box-style">
                  <h3 className="roboto-font">5</h3>
                  <p className="pa-para-style"> COMPLETED PROJECTS</p>
                </div>
              </Col>
            </Row>
            <Row>
              <Col className="col-box-style">
                <div className="box-style">
                  <h3 className="roboto-font">5</h3>
                  <p className="pa-para-style"> HAPPY CUSTOMERS</p>
                </div>
              </Col>
              <Col className="col-box-style">
                <div className="box-style">
                  <h3 className="roboto-font">1</h3>
                  <p className="pa-para-style"> PROJECTS ONGOING</p>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
        <p className="separator"></p>
        <Row>
          <Col className="circle-col-style"></Col>
        </Row>
      </Container>
    );
  }
}
