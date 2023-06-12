import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from "react"

function App() {
  const [languages, setLanguages] = useState([        
  {name: "Php", votes: 0},
  {name: "Python", votes: 0},
  {name: "JavaScript", votes: 0},
  {name: "Java", votes: 0}])

const addVote = (item) => {
  console.log(item);
  item['votes']++
  setLanguages([...languages])
}

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className='language-container'>
          {
            languages.map(item=> {
              return (<div>
                <h2>{item['name']}</h2>
                <h2>{item['votes']}</h2>
                <button onClick={(e)=> addVote(item)} >vote</button>
              </div>)
            })
          }
        </div>

      </header>
    </div>
  );
}

export default App;
