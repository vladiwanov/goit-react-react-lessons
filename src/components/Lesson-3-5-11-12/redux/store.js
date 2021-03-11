import { createStore, combineReducers } from 'redux';
// import { composeWithDevTools } from 'redux-devtools-extension';
// import todosReducer from './todos-reducer';

// const rootReducer = {
//   todos: todosReducer,
// };

// const store = createStore(rootReducer, composeWithDevTools());

const reducer = (state = { a: 10 }, action) => {
  console.log('то что пришло в стор', action);
  return state;
};

const store = createStore(reducer);

export default store;
