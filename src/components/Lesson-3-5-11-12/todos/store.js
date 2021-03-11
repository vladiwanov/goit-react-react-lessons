import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import todosReducer from './todos-reducer';

const rootReducer = {
  todos: todosReducer,
};

// const store = createStore(rootReducer, composeWithDevTools());

const reducer = (state = {}, action) => state;

const store = createStore(reducer);

export default store;
