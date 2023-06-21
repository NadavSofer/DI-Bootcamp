import logo from './logo.svg';
import './App.scss';
import './style.scss'
import Card from './components/Card'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Card/>
      </header>
    </div>
  );
}

export default App;
