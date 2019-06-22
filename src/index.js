import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';

import './styles/style.scss';
import CountupReducer from './reducers';
import CountupContainer from './containers/countup_container';

const middlewares = [ReduxThunk];

if (process.env.NODE_ENV === 'development') {
  // eslint-disable-next-line
  const { logger } = require('redux-logger');

  middlewares.push(logger);
}

const stores = createStore(
  CountupReducer,
  applyMiddleware(...middlewares)
);

ReactDOM.render(
  <Provider store={stores}>
    <CountupContainer />
  </Provider>,
  document.getElementById('app')
);
