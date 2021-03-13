import todosTypes from './todos-types';
import shortid from 'shortid';

const { ADD, REMOVE, TOGGLE_COMPLETED, CHANGE_FILTER } = todosTypes;
const Addtodo = text => ({
  type: ADD,
  payload: {
    id: shortid.generate(),
    text,
    completed: false,
  },
});
export default { Addtodo };

const todosRemove = value => ({ type: REMOVE, payload: value });
const todosToggleCompleted = value => ({
  type: TOGGLE_COMPLETED,
  payload: value,
});
const todosChangeFilter = value => ({ type: CHANGE_FILTER, payload: value });

export default todosActions;
