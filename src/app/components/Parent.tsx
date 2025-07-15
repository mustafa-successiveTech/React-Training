import React, { useCallback, useState } from "react";
import Child from "./Child";

export default function Parent() {
  const [count, setCount] = useState<number>(0);

  const increment = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);

  return (
    <>
      <p>Parent Component</p>
      <Child onIncrement={increment} count={count} setCount={setCount} />
    </>
  );
}
