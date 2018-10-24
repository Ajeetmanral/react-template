import React from 'react';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import PropTypes from 'prop-types';
import { createStore, applyMiddleware, compose } from 'redux';

import rootReducer from 'store';

/* eslint-disable no-underscore-dangle */
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
/* eslint-enable */

// adding middlewares
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

const App = props => (
  <Provider store={store}>
    <div>
      <h1>Learning React</h1>
      { props.children ? React.cloneElement(props.children) : null }
    </div>
  </Provider>
);

App.propTypes = {
  children: PropTypes.node,
};

export default App;
