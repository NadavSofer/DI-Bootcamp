import logo from './logo.svg';
import './App.css';
import Main from './components/Main';
import { useState, createContext } from 'react';

export const AppContext = createContext(null)

function App() {
  const [search, setSearch] = useState([])
  return (
    <AppContext.Provider value={{search, setSearch}}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Main/>
        </header>
      </div>
    </AppContext.Provider>
  );
}

export default App;
