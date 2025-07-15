import React from "react";
import useTimer from "../customHook/useTimer";

export default function CountdownTimer() {
  const { timeLeft, isRunning, start, pause, reset } = useTimer(10);

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h2>⏱ Countdown Timer</h2>
      <h1>{timeLeft} sec</h1>
      <p>Status: {isRunning ? "Running" : "Stopped"}</p>
      <button onClick={start}>Start</button>
      <button onClick={pause}>Pause</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}
