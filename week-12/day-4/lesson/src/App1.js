import logo from './logo.svg';
import './App.css';
import { createContext,useState } from 'react'
import Name from './components/Name';

export const AppContext = createContext(null)

function App() {
  const [name, setName] = useState('thing')
  const [count, setCount] = useState(0)
  return (
    <AppContext.Provider value={{name, setName, count, setCount}}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Name/>
        </header>
      </div>
    </AppContext.Provider>

  );
}

export default App;
