import Counter from "@/app/components/Counter";

export default function Question1() {
    return (
        <>
            <h3>
                    1. Create a functional component called Counter.
                    Inside the component, use the useState hook to manage a state variable named count initialized to 0.
                    Render the current value of count in a p element.
                    Add two buttons, one for incrementing the count and another for decrementing it.
                    When the user clicks on the buttons, update the count state accordingly.
            </h3>
            <Counter />
        </>
    )
}