import React from 'react';
import './App.css';
import {Link} from 'react-router-dom';

function Contact() {
  const textStyle = {
    color: 'white'
  };

  return (
    <div className="contact">
        <h4>Contact:   027 999 9999</h4>
        <h4>Email:  contact@mtbikenz.com</h4>
    </div>
  );
}

export default Contact;