import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunkMiddleware from 'redux-thunk'
import {createLogger} from 'redux-logger'
import reducer from './app/reducers'
import {composeWithDevTools } from 'redux-devtools-extension'
import AppContainer from './app/containers/AppContainer'

const loggerMiddleware = createLogger({ predicate: (getState, action) => __DEV__  });

function configureStore(initialState) {
  const enhancer = composeWithDevTools(
    applyMiddleware(
      thunkMiddleware,
      loggerMiddleware
    ),
  );
  return createStore(reducer, initialState, enhancer)
}

const store = configureStore({});

import {
  AppRegistry,
  StyleSheet,
  View,
  Text
} from 'react-native';

const App = () => (
  <Provider store={store}>
    <AppContainer />
  </Provider>
)

export default App