//! ❌ - static action
export const myAction2 = {
  type: 'MY_ACTION',
  payload: 'super-payload',
};

//' ✅ - actionCreater - функция
export const myAction = value => ({
  type: 'MY_ACTION',
  payload: value,
});
