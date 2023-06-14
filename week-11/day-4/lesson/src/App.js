import logo from './logo.svg';
import './App.css';
import About from './components/About';
import Home from './components/Home';
import Contact from './components/Contact';
import Nav from './components/Nav';

// just look at week 11 day 3 product api

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Nav/>
      </header>
    </div>
  );
}

export default App;
