import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { detectDevice } from "../Shared/shared";
import { Container, Row, Col } from "react-bootstrap";
import { withRouter } from "react-router-dom";

export class Header extends React.Component {
  render() {
    const userDevice = detectDevice();

    return (
      <Container className="header" fluid>
        <Row
          style={
            userDevice !== "mobile" ? { width: "100%" } : { width: "auto" } //mobile
          }
        >
          <Col>
            <Row>
              <Col className="appname-container">
                <Link to="/">
                  <p className="app-name">Hello</p>
                </Link>

                <Link to="/about">
                  <p className="app-name">Hello</p>
                </Link>
                <Link to="/project">
                  <p className="app-name">Hello</p>
                </Link>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    );
  }
}

export const HeaderWR = withRouter(Header);
