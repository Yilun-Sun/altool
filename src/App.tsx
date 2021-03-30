import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Dashboard from './component/dashboard/Dashboard';
import Home from './component/home/Home';
import RandomPassGen from './component/tools/RandomPassGen/RandomPassGen';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <Home></Home>
        </Route>
        {/* <Route path='/about'>
          <About />
        </Route> */}
        <Route path='/dashboard'>
          <Dashboard />
        </Route>
        <Route path='/tool/random-pass-generator'>
          <RandomPassGen />
        </Route>
      </Switch>
    </Router>
  );
}
