import react, { Component } from 'react'
import { Link } from "react-router-dom";
import MentalHealth from "./MentalHealth";
import Legal from "./Legal";
import { Navbar, Nav } from 'react-bootstrap';

export default class Navigation extends Component {

    render() { return (
        <>
           
            <Navbar bg="light" variant="light" style={{ minWidth: 700}}>
					<Navbar.Brand href="/">Cortadito</Navbar.Brand>
					<Nav className="mr-auto" style={{marginLeft: "auto", paddingRight: 40 }}>
						<Nav.Link href="/">Home</Nav.Link>
						<Nav.Link href="about">About</Nav.Link>
						<Nav.Link href="mental-health">Mental Health</Nav.Link>
                        <Nav.Link href="legal">Legal Services</Nav.Link>
                        <Nav.Link href="signUp">Sign Up</Nav.Link>
					</Nav>
				</Navbar>
        </>
    )}

}