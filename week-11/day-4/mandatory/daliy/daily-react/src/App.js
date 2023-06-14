// import logo from './logo.svg';
import './App.css';
import React from 'react';

class App extends React.Component {
    constructor(props){
        super(props)
        this.state = {
          message: ''
        }
    }

    componentDidMount = () => {
      const getData = async () => {
        const res = await fetch('http://127.0.0.1:3030/api/hello');
        const data = await res.json()
        return data
      }

    const handleSubmit = (e) => {
      e.preventDefault()
      fetch('http://localhost:8000/api/hello' ,{
        method:'POST',
        body:e.target
      })
      .then(data => data.json())
      .then(message => {
        console.log(message)
        this.setState({ message: message })
      })
  
    }

    getData().then((res) => {
      this.setState({ message: res });
    });

    }
    render(){
      return(
        <div className="App">
          <header className="App-header">
            <h1>{this.state.message}</h1>

            <form onSubmit={handleSubmit}>
              <input type='text'/>
              <input type='submit'/>
            </form>
          </header>
        </div>
      )
    }
}


export default App;
