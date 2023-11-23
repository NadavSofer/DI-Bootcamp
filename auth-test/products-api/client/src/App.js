import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Nav from './components/Nav';
import LoginRegister from './components/LoginRegister';
import { useState, createContext } from 'react';
import { Auth } from './auth/Auth';

export const appContext = createContext(null)

function App() {
  const [token, setToken] = useState(null)
  return (
    <appContext.Provider value={{token, setToken}}>
      <div className="App">
        <Nav/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/login' element={<LoginRegister title='Login'/>}/>
          <Route path='/register' element={<LoginRegister title='Register'/>}/>
        </Routes>

      </div>
    </appContext.Provider>

  );
}

export default App;
