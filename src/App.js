import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navigation from "./components/Navigation";
import Home from "./components/Home";
import About from "./components/About";
import Footer from "./components/Footer";
import Signup from "./components/Signup";
import Login from "./components/Login";
import MentalHealth from "./components/MentalHealth"
import Legal from "./components/Legal"

import "./App.css";

function App() {
  // const { token, setToken } = useToken();
  
  return (
    <>
      <Router>
        <div className="App">
          <header className="App-header">
            <Navigation />
          </header>
          <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/about" element={<About />} />
            <Route path="/mental-health" element={<MentalHealth />} />
            <Route path="legal" element={<Legal />} />
            <Route path="/signUp" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/logout" element={<Home />} />
          </Routes>
        </div>
        <footer className="App-footer">
          <Footer />
        </footer>
      </Router>
    </>
  );
}

export default App;
