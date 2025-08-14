import ButtonDemoPage from "@/app/components/ButtonDemoPage";

export default function Question8() {
    return (
        <div style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
            <h3>
                12. Create a reusable Button component that accepts props to apply different styles such as primary, secondary, and danger, along with click handlers. Demonstrate how to use this Button component within a sample Next.js application.
            </h3>
            <ButtonDemoPage />
        </div>
    )
}