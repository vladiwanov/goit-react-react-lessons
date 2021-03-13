import React from 'react';
import s from './Counter.module.css';

const Controls = ({ step, onIncrement, onDecrement }) => {
  return (
    <div className={s.control}>
      <button type="button" onClick={onDecrement}>
        уменьшить на {step}
      </button>
      <button type="button" onClick={onIncrement}>
        увеличить на {step}
      </button>
    </div>
  );
};
export default Controls;
