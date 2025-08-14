import Counter from "@/app/components/Counter";

export default function Question3() {
    return (
        <div style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
            <h2>
                2. Create a Counter component that shows a number with increment and decrement buttons. Write tests using React Testing Library to verify that the counter updates correctly on button clicks.
            </h2>
            <Counter />
        </div>
    )
}