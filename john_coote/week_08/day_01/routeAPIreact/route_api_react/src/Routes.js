import React, { PureComponent as Component } from 'react';
import {HashRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home';
import Migrants from './components/Migrants';

export const Routes = (
  <Router>
    <div>
      <h1>COming SOon</h1>
      <Route exact path="/" component={ Home } />
      <Route exact path="/migrants" component={ Migrants } />
    </div>
  </Router>
)

export default Routes
