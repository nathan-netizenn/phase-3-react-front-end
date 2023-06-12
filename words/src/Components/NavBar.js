import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

function NavBar() {
  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li>
          <Link to="/">Home</Link>
        </li>
          <li>
          <Link to="/Quote">Quote</Link>
        </li>
        <li>
          <Link to="/RandomQuote">RandomQuote</Link>
        </li>
        <li>
          <Link to="/Submission">Submission</Link>
          </li>
        
      </ul>
    </nav>
  );
}

export default NavBar;