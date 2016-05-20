import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute} from 'react-router';
import App from './components/Main';
import Home from './components/Home';
import Essay from './components/Essay';
import Blog from './components/Blog';
import Game from './components/Game';
import Contact from './components/Contact';

ReactDOM.render(
  (
    <Router>
      <Route path="/" component={App}>
        <IndexRoute component={Home} />
        <Route path="/home" component={Home}></Route>
        <Route path="/essay" component={Essay}></Route>
        <Route path="/blog" component={Blog}></Route>
        <Route path="/game" component={Game}></Route>
        <Route path="/contact" component={Contact}></Route>
      </Route>
    </Router>
  ),
  document.getElementById('app')
);
