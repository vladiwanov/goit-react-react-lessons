import React from 'react';
import s from './Counter.module.css';

const Controls = ({ onIncrement, onDecrement }) => {
  return (
    <div className={s.control}>
      <button type="button" onClick={onDecrement}>
        уменьшить на 1
      </button>
      <button type="button" onClick={onIncrement}>
        увеличить на 1
      </button>
    </div>
  );
};
export default Controls;
