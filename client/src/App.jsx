import './App.css';
import Home from './components/Home/Home';
import Menu from './components/Menu/Menu';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <Menu /> */}
      <Home />
    </div>
  );
}

export default App;