// import logo from './logo.svg';
import './App.css';
import Test from './components/Test';
// import {useState } from 'react'
import React from 'react'
import { connect } from 'react-redux';
import { changePropOne } from './redux/actions';
import Counter from './components/Counter';



class App extends React.Component {


  render(){
    return(
    <div className="App">
      <header className="App-header">
        {/* <Test title='test'/>
        <div>{this.props.a}</div>
        <div>{this.props.title}</div>
        <div>
          change prop one: <input onChange={this.props.changeOne} />
        </div> */}
        <Counter/>
      </header>
    </div>
    )
  }
}

const mapStateToProps = (state) => {
  // console.log(state);
  return {
    a: state.property_one,
    title: state.property_two
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    changeOne: (e)=> dispatch(changePropOne(e.target.value))
  }
}


// function App() {
//   const [title, setTitle] = useState('from parent to child')
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <Test title={title} setTitle={setTitle}/>
//       </header>
//     </div>
//   );
// }



export default connect(mapStateToProps, mapDispatchToProps)(App);