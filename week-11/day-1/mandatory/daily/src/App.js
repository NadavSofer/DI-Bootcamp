import logo from './logo.svg';
import './App.css';
import ImgCarousel from './components/ImgCarousel';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ImgCarousel/>
      </header>
    </div>
  );
}

export default App;
