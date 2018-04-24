import React from 'react';
import logo from './logo.svg';
import './App.css';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import HomePage from './home-page';
import AllSups from './all-sups';
import Profile from './profile';


let Navbar = () =>
    <div>
        <Link to="/">Home</Link>
        <Link to="/allsups">All Sups</Link>
        <Link to="/users/1">rfpoulos</Link>
        <Link to="/users/2">goatsarecool</Link>
    </div>;
let App = () =>
  <Router>
    <div>
      <Navbar />
      <Route path="/homepage" component={HomePage} />
      <Route path="/allsups" component={AllSups} />
      <Route path="/users/:userId" component={Profile} />
    </div>
  </Router>
;

export default App;