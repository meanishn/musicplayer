// import 'bootstrap/scss/bootstrap.scss';
import '../style/style.scss';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import ReduxPromise from 'redux-promise';
import App from './container/App';
import reducers from './reducers';

// const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(ReduxPromise)));

ReactDOM.render(
  <Provider store={store}>
     <App /> 
  </Provider>
  , document.querySelector('.app'));
