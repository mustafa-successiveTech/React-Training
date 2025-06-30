import ComponentInput from "@/app/components/ComponentInput";

export default function Question1() {
    return (
        <div style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center", 
                marginTop: "40px",    
            }}>
            <h3>
                1. Create a React component with an input field. Implement it as a controlled component where the input value is controlled by the component's state. When the user types into the input field, the component's state should update accordingly.
            </h3>
            <ComponentInput />
        </div>
    )
}