import Navigation from './components/Navigation'
import Home from './components/Home'
import About from './components/About'

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Navigation />
      </header>

      <Home />
      

    </div>
  );
}

export default App;
