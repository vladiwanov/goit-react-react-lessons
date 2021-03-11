import { combineReducers } from "redux";

{
  // counter: { },
  todos:
  {
    items: [],
    filer: '',
  },
}

const items = (state='', actions)=> {
  return state;
}

const filter = (state = '', actions) => {
  return state;
}


export default combineReducers({
  items,                                //items:items,
  filter,                               // filter:filter,
})