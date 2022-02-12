import react, { Component } from 'react'
import { Link } from "react-router-dom";
import MentalHealth from "./MentalHealth";
import Legal from "./Legal";
import { Navbar, Nav } from 'react-bootstrap';

export default class Navigation extends Component {

    render() {
        return (
          <div>
            <Navbar className="nav-bar" style={{ minWidth: 700 }}>
              <img
                id="coffee"
                src="https://previews.123rf.com/images/fokaspokas/fokaspokas1803/fokaspokas180300007/96756525-cup-of-hot-coffee-icon-on-transparent-background-.jpg"
              ></img>
              <Navbar.Brand className="brand" href="/">
                Cortadito
              </Navbar.Brand>
              <Nav
                className="mr-auto"
                style={{ marginLeft: "auto", paddingRight: 40 }}
              >
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="about">About</Nav.Link>
                <Nav.Link href="mental-health">Mental Health</Nav.Link>
                <Nav.Link href="legal">Legal Services</Nav.Link>
                <Nav.Link href="signUp">Sign Up</Nav.Link>
              </Nav>
            </Navbar>
          </div>
        );
    }
}