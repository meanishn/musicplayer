// import 'bootstrap/scss/bootstrap.scss';
import '../style/style.scss';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import ReduxPromise from 'redux-promise';
import thunk from 'redux-thunk';
import {throttle} from 'lodash';
import App from './container/App';
import reducers from './reducers';

import {loadState, saveState} from './helper/localStorage';

// const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const persistedState = loadState();
const store = createStore(reducers, persistedState, composeEnhancers(applyMiddleware(thunk)));

store.subscribe(throttle(() => {
  saveState({
    userPlaylist: store.getState().userPlaylist,
    musics: store.getState().musics
  })
}, 1000));

ReactDOM.render(
  <Provider store={store}>
     <App /> 
  </Provider>
  , document.querySelector('.app'));
