"use client";
import { useState } from "react";

export default function ComponentInput() {
  const [name, setName] = useState<string>("");

  return (
    <div>
      <h2>
        <input
          type="text"
          value={name}
          placeholder="Enter name.."
          onChange={(e) => setName(e.target.value)}
        />
      </h2>
      <h2>Name : {name}</h2>
    </div>
  );
}
