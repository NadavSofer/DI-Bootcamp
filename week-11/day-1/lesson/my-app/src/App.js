import logo from './logo.svg';
import './App.css';
import User from './components/User';
import robots from './/user.json';



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>

        <div>
          {
            robots.map((robot, i) => {
              return <User key={i} robotInfo={robot}/>
            })
          }
        </div>

      </header>
    </div>
  );
}

export default App;