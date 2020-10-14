import React from 'react';
import './App.css';
import Nav from './Nav';
import Header from './Header';
import Login from './Login';
import Register from './Register';
import Forum from './Forum';
import About from './About';
import GettingStarted from './GettingStarted';
import Shop from './Shop';
import Footer from './Footer';
//Import {specific} from 'react-router-dom'
//as for aliases
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Nav />
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/Login" component={Login}/>
          <Route path="/Register" component={Register}/>
          <Route path="/Forum" component={Forum}/>
          <Route path="/About" component={About}/>
          <Route path="/GettingStarted" component={GettingStarted}/>
          <Route path="/Shop" component={Shop}/>
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
