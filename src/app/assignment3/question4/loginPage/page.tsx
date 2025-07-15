"use client";
import { useLoginAuth } from "@/app/context/AuthLoginContext";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Login() {
  const { login } = useLoginAuth();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = () => {
    if (login(username, password)) {
      router.push("home");
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <>
      <h2>Login Page</h2>
      <input
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Username"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
      />
      <button onClick={handleLogin}>Login</button>
    </>
  );
}
