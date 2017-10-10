import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, combineReducers, compose  } from 'redux'
import thunkMiddleware from 'redux-thunk'
import {createLogger} from 'redux-logger'
import reducer from './app/reducers'

const loggerMiddleware = createLogger({ predicate: (getState, action) => __DEV__  });

function configureStore(initialState) {
  const enhancer = compose(
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

class Gpsteam extends Component {
  render() {
    return (
        <View>
          <Text>
              GPSteam
          </Text>
        </View>
    );
  }
}

const App = () => (
  <Provider store={store}>
    <Gpsteam />
  </Provider>
)

export default App