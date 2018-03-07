import React, {PureComponent as Component} from 'react';
import ReactDOM from 'react-dom';
import 'preact/devtools';

import { HashRouter as Router, Route} from 'react-router-dom'

import Home from './components/Home'
import Search from './components/Search'
import GithubUser from './components/GithubUser'

const Routes = (
  <Router>
    <div>
      <Route exact path="/" component={Home} />
      <Route exact path="/search" component={Search} />
      <Route path="/details/:username" component={GithubUser} />
    </div>
  </Router>
);

ReactDOM.render(Routes, document.body);
