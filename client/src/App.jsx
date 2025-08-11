import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';
import Courses from './pages/Courses';
import Jobs from './pages/Jobs';
import Recommendations from './pages/Recommendations';
import Login from './pages/Login';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <div className="app-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/career" element={<Recommendations />} />
            <Route path="/jobs" element={<Jobs />} />
            <Route path="/learning" element={<Courses />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
