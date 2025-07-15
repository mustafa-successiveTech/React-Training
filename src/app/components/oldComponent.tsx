"use client";
import { useState } from "react";
import NewComponent from "./newComponent";

export default function OldComponent() {
  const [input, setInput] = useState<string>("");

  return (
    <>
      <input
        type="text"
        value={input}
        placeholder="Type show.."
        onChange={(e) => setInput(e.target.value)}
      />

      {input === "show" && <NewComponent />}
    </>
  );
}
