import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { detectDevice } from "../Shared/shared";

export class Header extends React.Component {
  render() {
    const userDevice = detectDevice();

    return <Container className="header"></Container>;
  }
}
