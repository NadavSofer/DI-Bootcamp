// import logo from './logo.svg';
import './App.css';

import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Nav from './components/Nav';
import { Routes, Route } from 'react-router-dom';

function App() {


  return (    
    <div className="App">
      <header className="App-header">
        <Nav/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/About' element={<><About/><Contact/></>}/>
          <Route path='/Contact/' element={<Contact/>}/>
          <Route path='/Contact/:id' element={<Contact/>}/>
        </Routes>
      </header>
    </div>
  );
}

export default App;
