import { combineReducers } from 'redux';
import todosTypes from './todos-types';

// const itemInitialSatete = [];
// const todosItemReducer (state = itemInitialSatete, { type, payload }) = {
//  switch (key) {
//    case ADD:

const item = (state = [], { type, payload }) => {
  const { ADD, REMOVE, TOGGLE_COMPLETED, CHANGE_FILTER } = todosTypes;
  switch (type) {
    case ADD:
      return [payload, ...state];

    default:
      return state;
  }
};
const filter = (state = '', { type, payload }) => state;

export default combineReducers({
  item,
  filter,
});
