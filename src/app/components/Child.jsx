import React from 'react';

export default function Child({ onIncrement, count, setCount }) {

    const setZero = () => {
        setCount(count = 0);
    }

  return (
    <div>
      <h3>Child Component</h3>
      <p>Count from Parent: {count}</p>
      <button onClick={onIncrement}>Increment Count</button>
      <button onClick={setZero}>Reset to Zero from Child</button>
    </div>
  );
}
