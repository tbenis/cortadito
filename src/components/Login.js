import React, { useState } from "react";
import PropTypes from 'prop-types';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "../App.css";

async function loginUser(credentials) {
  localStorage.setItem("user", JSON.stringify(credentials))
 }
export default function Login({ setToken }) {
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();


 const handleSubmit = async e => {
  e.preventDefault();
  window.location.replace("http://localhost:3000/community")
  const token = await loginUser({
    username,
    password
  });

  setToken(token);

  
}

  return (
    <>
    <div className="login-wrapper">
      <h1 className="form-h1">Please Log In</h1>
      <form onSubmit={handleSubmit}>
        <label>
          <p>Username</p>
          <input type="text" onChange={e => setUserName(e.target.value)} />
        </label>
        <br/>
        <label>
          <p>Password</p>
          <input type="password" onChange={e => setPassword(e.target.value)}/>
        </label>
        <div>
        <br/>
          <button type="submit">Submit</button>
        </div>
      </form>
      </div>
      <br/><br/><br/>
    </>
  );
}
Login.propTypes = {
    setToken: PropTypes.func.isRequired
  }