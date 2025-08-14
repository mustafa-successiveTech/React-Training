import CounterWithStep from "@/app/components/CounterWithStep";

export default function Question5() {
  return (
    <>
      <h3>
        5.Create a functional component called CounterWithStep. Use the useState
        hook to manage a state variable named count initialized to 0. Render the
        current value of count in a p element. Add two buttons, one for
        incrementing the count and another for decrementing it. Add an input
        field where the user can specify a step value. Update the count using
        the specified step value when the buttons are clicked
      </h3>
      <CounterWithStep />
    </>
  );
}
