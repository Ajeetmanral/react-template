import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router';
import app from 'pages/route';

ReactDOM.render(
  <Router history={browserHistory} routes={app} />,
  document.getElementById('app'),
);
