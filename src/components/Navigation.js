import  { Component } from 'react'

import { Navbar, Nav } from 'react-bootstrap';
import coffeelogo from '../assets/coffeecup.gif'

export default class Navigation extends Component {

    render() {
        return (
          <div>
            <Navbar className="nav-bar" style={{ minWidth: 700 }}>
              <img id="coffee" src={coffeelogo}></img>
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