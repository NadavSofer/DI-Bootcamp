import './App.css';
import './style.css'
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import About from './Components/About';
import Contact from './Components/Contact';
import Post from './Components/Post';
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header >
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/About' element={<About/>}/>
          <Route path='/Contact' element={<Contact/>}/>
          <Route path='/Post/:id' element={<Post/>}/>
        </Routes>
      </header>
    </div>
  );
}

export default App;
