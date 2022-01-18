import './App.css';
import Navbar from './components/navbar';
import Footer from './components/footer';
import {HashRouter as Router, Route, Routes, Layout} from 'react-router-dom'
import Home from './pages/Home';
import Menu from './pages/Menu';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
  return (
    <div className="App">
      <Router basename='/'>
        <Navbar/>
        <Routes>
          <Route path='/' exact element={<Home/>} />
          <Route path='/menu' exact element={<Menu/>} />
          <Route path='/about' exact element={<About/>} />
          <Route path='/contact' exact element={<Contact/>} />
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
