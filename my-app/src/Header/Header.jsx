import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { detectDevice } from "../Shared/shared";
import { Container, Row, Col } from "react-bootstrap";
import { withRouter } from "react-router-dom";

class Header extends React.Component {
  render() {
    const userDevice = detectDevice();

    return (
      <Container className="header" fluid>
        <Row
          style={
            userDevice !== "mobile" ? { width: "100%" } : { width: "auto" } //mobile
          }
        >
          <Col xs={4} md={4} lg={6}>
            <Row>
              <Col xs={6} lg={2} className="logo-container"></Col>
              <Col xs={6} lg={10} className="appname-container">
                <Link to="/">
                  <p className="app-name"></p>
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
