import React from 'react';
import './App.css';
import {Link} from 'react-router-dom';

function Nav() {
  const navStyle = {
    color: 'white'
  };

  return (
    <nav>
        <Link style={navStyle} to='/'>
          <h3>Logo</h3>
        </Link>
        <ul className="nav-links">
            <Link style={navStyle} to='/About'>
              <li>About</li>
            </Link>
            <Link style={navStyle} to='/GettingStarted'>
              <li>Getting Started</li>
            </Link>
            <Link style={navStyle} to='/Shop'>
              <li>Shop</li>
            </Link>
            <Link style={navStyle} to='/Forum'>
              <li>Forum</li>
            </Link>
        </ul>
    </nav>
  );
}

export default Nav;
