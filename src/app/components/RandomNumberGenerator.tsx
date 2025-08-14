"use client";
import { useState } from "react";

export default function RandomNumberGenerator() {
  const [randomNumber, setRandomNumber] = useState<number>(50);

  const updateNumber = () => {
    const num = Math.floor(Math.random() * 100);
    setRandomNumber(num);
  };

  return (
    <>
      <div>
        <p>Current RandomNumber : {randomNumber} </p>
      </div>

      <div>
        <button onClick={updateNumber}>Update Number</button>
      </div>
    </>
  );
}
