import React from "react";
import "./AboutPage.css";
import { Container, Row, Col } from "react-bootstrap";
import { ProgressBar } from "react-bootstrap";

export default class AboutPage extends React.Component {
  render() {
    return (
      <Container fluid className="cont-main color-change-3x">
        <Row className="title-about">
          <h1 className="about-align ">
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
        <Col className="experience-info">MY SKILLS</Col>
        <Row>
          <Col className="circle-col-style">
            <div className="progress-bar-circle">
              <div className="percent">
                <svg>
                  <circle cx="70" cy="70" r="70"></circle>
                  <circle cx="70" cy="70" r="70"></circle>
                </svg>
                <div className="number">
                  <h2>
                    90<span className="color-percent"> %</span>
                  </h2>
                </div>
                <h4 className="text">HTML</h4>
              </div>
            </div>
          </Col>
          <Col className="circle-col-style">
            <div className="progress-bar-circle">
              <div className="percent">
                <svg>
                  <circle cx="70" cy="70" r="70"></circle>
                  <circle cx="70" cy="70" r="70"></circle>
                </svg>
                <div className="number">
                  <h2>
                    75<span className="color-percent"> %</span>
                  </h2>
                </div>
                <h4 className="text">JavaScript</h4>
              </div>
            </div>
          </Col>
          <Col className="circle-col-style">
            <div className="progress-bar-circle">
              <div className="percent">
                <svg>
                  <circle cx="70" cy="70" r="70"></circle>
                  <circle cx="70" cy="70" r="70"></circle>
                </svg>
                <div className="number">
                  <h2>
                    85<span className="color-percent"> %</span>
                  </h2>
                </div>
                <h4 className="text">CSS</h4>
              </div>
            </div>
          </Col>
          <Col className="circle-col-style">
            <div className="progress-bar-circle">
              <div className="percent">
                <svg>
                  <circle cx="70" cy="70" r="70"></circle>
                  <circle cx="70" cy="70" r="70"></circle>
                </svg>
                <div className="number">
                  <h2>
                    80<span className="color-percent"> %</span>
                  </h2>
                </div>
                <h4 className="text">Bootstrap</h4>
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col className="circle-col-style">
            <div className="progress-bar-circle">
              <div className="percent">
                <svg>
                  <circle cx="70" cy="70" r="70"></circle>
                  <circle cx="70" cy="70" r="70"></circle>
                </svg>
                <div className="number">
                  <h2>
                    93<span className="color-percent"> %</span>
                  </h2>
                </div>
                <h4 className="text">WordPress</h4>
              </div>
            </div>
          </Col>
          <Col className="circle-col-style">
            <div className="progress-bar-circle">
              <div className="percent">
                <svg>
                  <circle cx="70" cy="70" r="70"></circle>
                  <circle cx="70" cy="70" r="70"></circle>
                </svg>
                <div className="number">
                  <h2>
                    60<span className="color-percent"> %</span>
                  </h2>
                </div>
                <h4 className="text">React</h4>
              </div>
            </div>
          </Col>
          <Col className="circle-col-style">
            <div className="progress-bar-circle">
              <div className="percent">
                <svg>
                  <circle cx="70" cy="70" r="70"></circle>
                  <circle cx="70" cy="70" r="70"></circle>
                </svg>
                <div className="number">
                  <h2>
                    35<span className="color-percent"> %</span>
                  </h2>
                </div>
                <h4 className="text">PHP</h4>
              </div>
            </div>
          </Col>
          <Col className="circle-col-style">
            <div className="progress-bar-circle">
              <div className="percent">
                <svg>
                  <circle cx="70" cy="70" r="70"></circle>
                  <circle cx="70" cy="70" r="70"></circle>
                </svg>
                <div className="number">
                  <h2>
                    20<span className="color-percent"> %</span>
                  </h2>
                </div>
                <h4 className="text">Jquery</h4>
              </div>
            </div>
          </Col>
        </Row>
        <p className="separator"></p>
        <Col className="experience-info">EXPERIENCE & EDUCATION</Col>
        <Row>
          <Col>
            <ul>
              <li>
                <div>
                  <div>data</div>
                  <h3>
                    {" "}
                    job title
                    <span> company</span>
                  </h3>
                  <p> description </p>
                </div>
              </li>
              <li>
                <div>
                  <div>data</div>
                  <h3>
                    {" "}
                    job title
                    <span> company</span>
                  </h3>
                  <p> description </p>
                </div>
              </li>
              <li>
                <div>
                  <div>data</div>
                  <h3>
                    {" "}
                    job title
                    <span> company</span>
                  </h3>
                  <p> description </p>
                </div>
              </li>
            </ul>
          </Col>
          <Col>
            <ul>
              <li>
                <div>
                  <div>data</div>
                  <h3>
                    {" "}
                    job title
                    <span> company</span>
                  </h3>
                  <p> description </p>
                </div>
              </li>
              <li>
                <div>
                  <div>data</div>
                  <h3>
                    {" "}
                    job title
                    <span> company</span>
                  </h3>
                  <p> description </p>
                </div>
              </li>
              <li>
                <div>
                  <div>data</div>
                  <h3>
                    {" "}
                    job title
                    <span> company</span>
                  </h3>
                  <p> description </p>
                </div>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    );
  }
}
