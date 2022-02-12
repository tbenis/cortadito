import react, { Component } from 'react'
import { Link } from "react-router-dom";

export default class Navigation extends Component {

    render() { return (
        <>
            <h1>  This is the Nav bar </h1>

            <Link to="/">Home</Link> |{" "}
            <Link to="/about">About</Link> 
        </>
    )}

}