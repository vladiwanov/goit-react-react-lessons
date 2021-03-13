import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import counterReducer from './counter/counter-reducer';
import todosReducer from '../redux/todos/todos-reducer';

// const initialState = {
//   counter: {
//     value: 0,
//     step: 5,
//   },
// };

// const reducer = (state = initialState, { type, payload }) => {
//   const { DECREMENT, INCREMENT } = types;
//   switch (type) {
//     case DECREMENT:
//       return {
//         ...state,
//         counter: {
//           ...state.counter,
//           value: state.counter.value - payload,
//         },
//       };
//     case INCREMENT:
//       return {
//         ...state,
//         counter: {
//           ...state.counter,
//           value: state.counter.value + payload,
//         },
//       };
//     default:
//       return state;
//   }
// };

// const counterInitialState = {
//   value: 0,
//   step: 5,
// };

// const counterReducer = (state = counterInitialState, { type, payload }) => {
//   const { DECREMENT, INCREMENT } = types;

//   switch (type) {
//     case DECREMENT:
//       return {
//         ...state,
//         value: state.value - payload,
//       };
//     case INCREMENT:
//       return {
//         ...state,
//         value: state.value + payload,
//       };
//     default:
//       return state;
//   }
// };

// const store = createStore();

const rootReducer = combineReducers({
  counter: counterReducer,
  todos: todosReducer,
});

const store = createStore(rootReducer, composeWithDevTools());

export default store;
