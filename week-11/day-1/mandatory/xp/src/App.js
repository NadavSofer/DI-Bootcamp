import logo from './logo.svg';
import './App.css';
import React from 'react'
import UserFavoriteColors from './components/UserFavoriteColors'
import Exercise4 from './components/Exercise4';


function App() {
  let noJSX = React.createElement('p', null, 'This is without JSX')
  const sum = 5+5
  const user = {
    firstName: 'Bob',
    lastName: 'Dylan',
    favAnimals : ['Horse','Turtle','Elephant','Monkey']
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {noJSX}
        <p>this is with JSX</p>
        <p>React is {sum} times better with JSX</p>
        <h3>{user.firstName}</h3>
        <h3>{user.lastName}</h3>
        <ul>
          {
            user.favAnimals.map((animal, i) => {
              return <UserFavoriteColors key={i} animal={animal}/>
            })
          }
        </ul>

        <Exercise4/>
      </header>
    </div>
  );
}

export default App;
