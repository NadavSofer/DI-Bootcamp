// import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import ErrorBoundary from './components/ErrorBoundary ';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Routes, Route, NavLink } from "react-router-dom";
import HomeScreen from './components/HomeScreen';
import Profile from './components/Profile';
import Shop from './components/Shop';
import PostList from './components/PostList';
import Example1 from './components/Example1 ';
import Example2 from './components/Example2 ';
import Example3 from './components/Example3';
import Exercise4 from './components/Exercise4';

function App() {
  const getData = async () => {
    const data = await fetch('https://webhook.site/e198add8-819b-4e4b-8dde-8ef3debb9ba5', {
        method: 'post',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            key1: 'myusername',
            email: 'mymail@gmail.com',
            name: 'Isaac',
            lastname: 'Doe',
            age: 27
        })
    })
    console.log(data)
}
  return (
    <div className="App">
        <>
          <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="/">Navbar</Navbar.Brand>
              <Nav className="me-auto">
                <Nav.Link as={NavLink} to="/">Home</Nav.Link>
                <Nav.Link as={NavLink} to="/profile">Profile</Nav.Link>
                <Nav.Link as={NavLink} to="/shop">Shop</Nav.Link>
              </Nav>
            </Container>
          </Navbar>
        </>

        <Routes>
        <Route path='/' element={<ErrorBoundary><HomeScreen/></ErrorBoundary>}/>
        <Route path='/profile' element={<ErrorBoundary><Profile/></ErrorBoundary>}/>
        <Route path='/shop' element={<ErrorBoundary><Shop/></ErrorBoundary>}/>
        </Routes>


        {/* <PostList/> */}
        {/* <Example1/> */}
        {/* <Example2/> */}
        {/* <Example3/> */}
        <button onClick={getData}>getData</button>
    </div>
  );
}

export default App;
