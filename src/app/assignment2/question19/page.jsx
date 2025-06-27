import CountdownTimer from "@/app/components/CountdownTimer";

export default function Question18() {
  return (
      <>
          <h3>
              19. Build a custom hook named useTimer for creating countdown timers.
              Create a useTimer hook that takes a countdown duration as a parameter.
              Use setInterval to decrement the timer at regular intervals.
              Return the current timer value and methods to start, pause, and reset the timer.
              Develop a component that utilizes the useTimer hook to display and control a countdown.
          </h3>
          <CountdownTimer />
      </>
  )
};