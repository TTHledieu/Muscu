import React from 'react';
import { AppRegistry } from 'react-native'

import { createStore, applyMiddleware, combineReducers, compose} from 'redux'
import { Provider } from 'react-redux'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'

import Home from './src/containers/Home'

import reducer from './src/reducers'

const loggerMiddleware = createLogger({ predicate: (getState, action) => __DEV__  });

function configureStore(initialState) {
  const enhancer = compose(
    applyMiddleware(
      thunkMiddleware,
      loggerMiddleware,
    ),
  );
  return createStore(reducer, initialState, enhancer);
}
const store = configureStore({});

const App = () => (
  <Provider store={store}>
    <Home />
  </Provider>
)

AppRegistry.registerComponent('position', () => App)
