import React from "react";

type childProps = {
  onIncrement : () => void;
  count : number;
  setCount : React.Dispatch<React.SetStateAction<number>>;
}

export default function Child({ onIncrement, count, setCount } : childProps) {
  const setZero = () => {
    setCount(0);
  };

  return (
    <div>
      <h3>Child Component</h3>
      <p>Count from Parent: {count}</p>
      <button onClick={onIncrement}>Increment Count</button>
      <button onClick={setZero}>Reset to Zero from Child</button>
    </div>
  );
}
