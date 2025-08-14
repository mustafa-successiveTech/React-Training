import { useState } from "react";

export default function CounterWithStep() {
  const [count, setCount] = useState<number>(0);
  const [st, setSt] = useState<string>("1");
  const step = parseFloat(st);

  const increment = () => {
    setCount(count + Number(step));
  };

  const decrement = () => {
    setCount(count - Number(step));
  };

  return (
    <div className="parent">
      <div>Count : {count}</div>
      <div>
        <button onClick={decrement}>Decrement</button>
        <button onClick={increment}>Increment</button>
      </div>

      <div>
        <input
          type="number"
          placeholder="StepValue"
          value={step}
          onChange={(e) => {
            setSt(e.target.value);
          }}
        />
      </div>
    </div>
  );
}
