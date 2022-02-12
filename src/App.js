import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navigation from "./components/Navigation";
import Home from "./components/Home";
import About from "./components/About";
import Footer from "./components/Footer";

import "./App.css";

function App() {
  return (
    <>
      <Router>
        <div className="App">
          <header className="App-header">
            <Navigation />
          </header>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="about" element={<About />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </>
  );
}

export default App;
