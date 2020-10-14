import React from 'react';
import './CSS/App.css';
import {Link} from 'react-router-dom';
import Button from '@material-ui/core/Button';
import logo from '/Images/index.png';

function Header() {
  const navStyle = {
    color: 'white'
  };

  const buttonStyle = {
    color: 'white',
    textDecoration: 'none'
  }

  return (
    <div className="header">
      <Link style={navStyle} to='/'>
          <img src={logo} alt='' width="80vh" height="80vh"></img>
      </Link>
      <Button variant="contained" color="primary">
        <Link style={buttonStyle} to="/Login">
          Login
        </Link>
      </Button>
      <Button variant="contained" color="primary">
        <Link style={buttonStyle} to="/Register">
          Register
        </Link>
      </Button>
      <h4>Contact:   027 999 9999</h4>
      <h4>Email:  contact@mtbikenz.com</h4>
    </div>
  );
}

export default Header;