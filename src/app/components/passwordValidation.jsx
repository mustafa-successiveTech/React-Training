"use client";
import { useState } from "react";

export default function PasswordValidation() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); 
    if (password === confirmPassword) {
      setError("");
      console.log("Successful Login");
    } else {
      setError("Password do not match");
      console.log("Login failed");
    }
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
        <form onSubmit={handleSubmit} 
            style={{ 
              width:'300px', 
              justifyContent:'center', 
              display: 'flex',
              flexDirection:'column', 
              gap: '10px'
              }}
            >

          <input
              type="password" 
              value={password}
              placeholder="Enter Password"
              onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <input
              type="password"
              value={confirmPassword}
              placeholder="Confirm Password"
              onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <br />

          {error && <p style={{ color: 'red' }}>{error}</p>}

          <button type="submit">Submit</button>
        </form>
    </div>  
  );
}
