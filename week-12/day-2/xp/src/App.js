import logo from './logo.svg';
import './App.css';
import TransactionForm from './Components/TransactionForm';
import TransactionList from './Components/TransactionList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <TransactionForm/>
        <TransactionList/>
      </header>
    </div>
  );
}

export default App;
