"use client";
import { useState } from "react";

export default function LoginForm({ onSubmit }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ username, password });
  };

  return (
   <form onSubmit={handleSubmit}>
    <input
      type="text"
      placeholder="Username"
      data-testid="username"
      value={username}
      onChange={(e) => setUsername(e.target.value)}
    />
    <input
      type="password"
      placeholder="Password"
      data-testid="password"
      value={password}
      onChange={(e) => setPassword(e.target.value)}
    />
    <button type="submit">Login</button>
  </form>

  );
}
