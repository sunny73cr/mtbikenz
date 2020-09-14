import React from 'react';
import './App.css';
import Nav from './Nav';
import Contact from './Contact';
import About from './About';
import GettingStarted from './GettingStarted';
import Shop from './Shop';
import Forum from './Forum';
import Footer from './Footer';
//Import {specific} from 'react-router-dom'
//as for aliases
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Contact />
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/About" component={About}/>
          <Route path="/GettingStarted" component={GettingStarted}/>
          <Route path="/Shop" component={Shop}/>
          <Route path="/Forum" component={Forum}/>
        </Switch>
        <Footer/>
      </div>
    </Router>
  );
}

const Home = () =>(
  <div>
    <h1>Home Page</h1>
  </div>
);

export default App;
