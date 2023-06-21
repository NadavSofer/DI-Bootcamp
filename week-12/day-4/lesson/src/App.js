import { useState, useRef, createContext } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  let count = useRef(0)

  const username = useRef(null)

  const addOne = () => {
    console.log(count.current);
    count.current = count.current + 1
    console.log(count.current);
    console.log(username.current);
  } 


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <input ref={username}/>
        <button onClick={addOne}>Add to ref</button>

      </header>
    </div>
  );
}

export default App;
