import thunkMiddleware from 'redux-thunk';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import reducers from '../reducers/';
import initialState from '../reducers/initialState';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  combineReducers({
    state: reducers
  }),
  initialState,
  composeEnhancers(applyMiddleware(thunkMiddleware))
);
