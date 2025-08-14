"Use client";
import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState<number>(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <>
      <div className="child">
        <button onClick={decrement}> - </button>
        <p>
          <b>Count : {count}</b>
        </p>
        <button onClick={increment}> + </button>
      </div>
    </>
  );
}
