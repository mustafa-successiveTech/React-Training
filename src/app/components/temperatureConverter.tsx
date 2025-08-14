import { useState } from "react";

export default function TemperatureConverter() {
  const [celsius, setCelsius] = useState("");
  const [fahrenheit, setFahrenheit] = useState("");

  const handleCelsiusChange = (e : React.ChangeEvent< HTMLInputElement>) => {
    const value = e.target.value;
    setCelsius(value);
    setFahrenheit(value === "" ? "" : ((+value * 9) / 5 + 32).toFixed(2));
  };

  const handleFahrenheitChange = (e : React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setFahrenheit(value);
    setCelsius(value === "" ? "" : (((+value - 32) * 5) / 9).toFixed(2));
  };

  return (
    <div style={{ maxWidth: "300px", margin: "20px auto" }}>
      <h2>Temperature Converter 🌡</h2>
      <input
        type="number"
        value={celsius}
        onChange={handleCelsiusChange}
        placeholder="Celsius"
      />
      <br />
      <br />
      <input
        type="number"
        value={fahrenheit}
        onChange={handleFahrenheitChange}
        placeholder="Fahrenheit"
      />
    </div>
  );
}
