import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './Pages/About';
import Events from './Pages/Events';
import Contact from './Pages/Contact';
import JoinUs from './Pages/JoinUs';
import Home from './Pages/home.jsx';
import Navbar from './NavBar';
import Footer from './components/Footer/Footer.jsx';
import Team from './Pages/Team.jsx';


function App() {
  return (
    <Router>

      <Navbar />
      <Routes>
       
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/events" element={<Events/>}/>
            <Route path="/join-us" element={<JoinUs/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/team" element={<Team/>}/>
          </Routes>
        <Footer />
    </Router>
  );
}

export default App;