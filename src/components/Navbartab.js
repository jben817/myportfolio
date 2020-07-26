import React from "react";
import * as ReactBootStrap from "react-bootstrap";


class Navbartab extends React.Component{
  render() {
      return (
        <div >
          <ReactBootStrap.Navbar bg="primary" expand="lg">
        <ReactBootStrap.Navbar.Brand href="#home">Portfolio</ReactBootStrap.Navbar.Brand>
        <ReactBootStrap.Navbar.Toggle aria-controls="basic-navbar-nav" />
        <ReactBootStrap.Navbar.Collapse id="basic-navbar-nav">
          <ReactBootStrap.Nav className="mr-auto">
            <ReactBootStrap.Nav.Link href="#home">Home</ReactBootStrap.Nav.Link>
            <ReactBootStrap.Nav.Link href="#link">Portfolio Projects</ReactBootStrap.Nav.Link>
            <ReactBootStrap.Nav.Link href="#link">Contact Me</ReactBootStrap.Nav.Link>
            </ReactBootStrap.Nav>
          </ReactBootStrap.Navbar.Collapse>
      </ReactBootStrap.Navbar>
          </div>
      );
  }
}
export default Navbartab;
