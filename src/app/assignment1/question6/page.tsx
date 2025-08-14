import Button from "@/app/components/PrimaryButton";
import { useState } from "react";

export default function Question6() {
  const [color, setColor] = useState<string>("");

  return (
    <>
      <h3>
        6. Create a functional component named Button that accepts props for text and color.
        Style the button using inline styles or CSS classes based on the color prop.
        Import and render the Button component in the App component with different text and color props.
      </h3>

      <div className="child" style={{ backgroundColor: color }}>
        <Button color={color} setColor={setColor} />
      </div>
    </>
  );
}
