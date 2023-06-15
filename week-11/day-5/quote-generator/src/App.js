import logo from './logo.svg';
import './App.css';
import QuoteGenerator from './Components/QuoteGenerator';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <QuoteGenerator/>
      </header>
    </div>
  );
}

export default App;
