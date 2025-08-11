import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import "./Navbar.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "Career Path", path: "/career" },
    { name: "Job Search", path: "/jobs" },
    { name: "Learning Hub", path: "/learning" },
    { name: "Dashboard", path: "/dashboard" },
  ];

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-content">
          
         
          <Link to="/" className="navbar-logo">
            AI Career Coach
          </Link>

          {/* Desktop Menu */}
          <div className="navbar-desktop-menu">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`navbar-link ${location.pathname === item.path ? 'active' : ''}`}
              >
                {item.name}
              </Link>
            ))}
            <Link to="/login" className="navbar-cta">
              Get Started
            </Link>
          </div>

      
          <button
            className="navbar-mobile-button"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle mobile menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <div className={`navbar-mobile-menu ${isOpen ? 'show' : ''}`}>
        {menuItems.map((item) => (
          <Link
            key={item.name}
            to={item.path}
            className={`navbar-link ${location.pathname === item.path ? 'active' : ''}`}
            onClick={() => setIsOpen(false)}
          >
            {item.name}
          </Link>
        ))}
        <Link to="/login" className="navbar-mobile-cta" onClick={() => setIsOpen(false)}>
          Get Started
        </Link>
      </div>
    </nav>
  );
}
