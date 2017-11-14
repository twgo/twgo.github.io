import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import App from './App/App';
import 錄 from './頁/錄';
import 辨識 from './頁/辨識';

import Debug from 'debug';
Debug.enable('tshi3:*');

const root = document.getElementById('app');

let history = browserHistory;
render(
  <div>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={錄}/>
        <Route path='%e8%be%a8%e8%ad%98' component={辨識}/>
        <Route path='*' component={錄}/>
      </Route>
    </Router>
  </div>,
  root
  );
