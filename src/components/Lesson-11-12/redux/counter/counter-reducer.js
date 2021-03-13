// ----------

import { combineReducers } from 'redux';
import actionTypes from './counter-types';

const valueReducer = (state = 10, { type, payload }) => {
  const { DECREMENT, INCREMENT } = actionTypes;
  switch (type) {
    case DECREMENT:
      return state - payload;
    case INCREMENT:
      return state + payload;
    default:
      return state;
  }
};
const stepReducer = (state = 5, action) => state;

// const counterReducer = combineReducers({
//   value: valueReducer,
//   step: stepReducer,
// });

export default combineReducers({
  value: valueReducer,
  step: stepReducer,
});
