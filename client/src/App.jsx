import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Menu from './components/Menu/Menu';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Menu />
    </div>
  );
}

export default App;