import { Dispatch, SetStateAction } from "react";

type ButtonProps = {
  color: string;
  setColor: Dispatch<SetStateAction<string>>;
};

export default function Button({ color, setColor }: ButtonProps) {
  return (
    <div
      style={{
        backgroundColor: color,
        color: "#fff",
        padding: "8px 16px",
        border: "none",
        borderRadius: "4px",
      }}
    >
      <input
        type="text"
        placeholder="Enter color (e.g. red, blue, #123456)"
        value={color}
        onChange={(e) => setColor(e.target.value)}
      />
    </div>
  );
}
