import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import About from './components/About'
import Home from './components/Home'
import Movies from './components/Movies.js';

import { Router, Route, IndexRoute, hashHistory } from 'react-router'

ReactDOM.render(<Router history={hashHistory}>
                    <Route path='/' component={App}>
                        <IndexRoute component={Movies} />
                        <Route path='movies' component={Movies} />
                        <Route path='home' component={Home} />
                        <Route path='about' component={About} />
                    </Route>
                  </Router>, document.getElementById('root'));

registerServiceWorker();
