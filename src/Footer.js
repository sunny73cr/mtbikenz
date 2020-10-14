import React from 'react';
import './CSS/App.css';
import {Link} from 'react-router-dom';

const navStyle = {
    color: 'white'
  };

const Footer = () => (
    <div className="footer">
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
    </div>
  );

export default Footer;