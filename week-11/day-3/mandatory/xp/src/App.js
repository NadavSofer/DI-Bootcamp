// import logo from './logo.svg';
import './App.css';
import React from 'react';
import ErrorBoundary from './ErrorBoundary';
import {Color, Child} from './components/Color';


class BuggyCounter extends React.Component {
  constructor(){
      super()
      this.state = {
          count:0
      }
  }

  add = () => {
      this.setState({count:this.state.count+1})
  }

  render(){
      if (this.state.count > 5) {
          throw Error('crashed... number above 5')
      }
      return(
          <>
              <h2 onClick={this.add} style={{cursor:'pointer'}}>{this.state.count}</h2>
          </>
      )
  }
}

function App() {
  
  return (
    <div className="App">
      <header className="App-header">
        <ErrorBoundary>
          <BuggyCounter/>
        </ErrorBoundary>
        
        <Color>
          <Child/>
        </Color>

        

      </header>
    </div>
  );
}

export default App;
