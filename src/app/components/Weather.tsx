import "../assignment1/assignment1.css";
import { useState } from "react";

export default function Weather() {

  const [temp, setTemp] = useState<string>("");
  const numericTemp = parseFloat(temp);

  return (
    <div className="parent">
      <input
        type="number"
        placeholder="Enter temperature"
        value={temp}
        onChange={(e) => setTemp(e.target.value)}
      />

      {temp !== "" && (
        <>
          {numericTemp > 25 ? (
            <h3>It's Sunny today!</h3>
          ) : numericTemp < 10 ? (
            <h3>It's cold today!</h3>
          ) : (
            <h3>It's moderate today!</h3>
          )}
          <h3>Temperature: {temp} °C</h3>
        </>
      )}
    </div>
  );
}
