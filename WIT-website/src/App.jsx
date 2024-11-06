import Home from './Pages/home.jsx';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom' 
import Team from './Pages/Team.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/team" element={<Team/>}/>
      </Routes>
    </Router>
  );
}

export default App;

