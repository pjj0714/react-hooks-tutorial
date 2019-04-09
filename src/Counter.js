import React, { useState, useReducer } from 'react';
const reducer = (state, action) => {
  console.log('action : ', action);
  console.log('action.type : ', action.type);
  console.log('satate : ', state);
  console.log('state.value : ', state.value);
  switch (action.type) {
    case 'INCREMENT':
      return { value: state.value + 1 };
    case 'DECREMENT':
      return { value: state.value - 1 };
    case 'asd':
      return { value: state.value * 3 };
    default:
      return state;
  }
};
const Counter = () => {
  const [state, dispatch] = useReducer(reducer, { value: 0 });
  console.log('Count state : ', state);
  console.log('Count dispatch : ', dispatch);
  return (
    <div>
      <div>현재 카운터 값은 {state.value}입니다.</div>
      <button onClick={() => dispatch({ type: 'asd' })}>+1</button>
      <button onClick={() => dispatch({ type: 'DECREMENT' })}>-1</button>
    </div>
  );
};

export default Counter;
