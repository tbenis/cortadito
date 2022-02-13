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
  window.location.replace("http://localhost:3000/mental-health")
  const token = await loginUser({
    username,
    password
  });

  setToken(token);

  
}

  return (
    <>
    <div className="login-wrapper">
      <h1>Please Log In</h1>
      <form onSubmit={handleSubmit}>
        <label>
          <p>Username</p>
          <input type="text" onChange={e => setUserName(e.target.value)} />
        </label>
        <label>
          <p>Password</p>
          <input type="password" onChange={e => setPassword(e.target.value)}/>
        </label>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
      </div>
    </>
  );
}
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   function validateForm() {
//     return email.length > 0 && password.length > 0;
//   }

//   function handleSubmit(event) {
//     event.preventDefault();
//   }

//   return (
//     <div className="Login">
//       <Form onSubmit={handleSubmit}>
//         <Form.Group size="lg" controlId="email">
//           <Form.Label>Email</Form.Label>
//           <Form.Control
//             autoFocus
//             type="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />
//         </Form.Group>
//         <Form.Group size="lg" controlId="password">
//           <Form.Label>Password</Form.Label>
//           <Form.Control
//             type="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//         </Form.Group>
//         <Button block size="lg" type="submit" disabled={!validateForm()}>
//           Login
//         </Button>
//       </Form>
//     </div>
//   );

Login.propTypes = {
    setToken: PropTypes.func.isRequired
  }