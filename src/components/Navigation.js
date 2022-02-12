import react, { Component } from 'react'
import { Link } from "react-router-dom";
import MentalHealth from "./MentalHealth";
import Legal from "./Legal";

export default class Navigation extends Component {

    render() { return (
        <>
            <h1>  This is the Nav bar </h1>

            <Link to="/">Home</Link> |{" "}

            <Link to="/about">About</Link> |{" "}
            <Link to="/mental-health">Mental Health</Link> |{" "}
            <Link to="/legal">Legal Services</Link> 
            <Link to="/signUp">SignUp</Link>
        </>
    )}

}