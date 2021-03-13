// -------------------------------

import actionTypes from './counter-types';

export const Increment = value => ({
  type: actionTypes.INCREMENT,
  payload: value,
});

export const Decrement = value => ({
  type: actionTypes.DECREMENT,
  payload: value,
});
