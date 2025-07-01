"use client"

import { useState } from "react";
import { useAuth } from "../context/AuthContext";

export default function ChildComponent() {

  const { isLogin, username, LoggedIn } = useAuth();
  const [inputUsername, setInputUsername] = useState("");

  const handleLogin = () => {
      if(inputUsername.trim()){
          LoggedIn(inputUsername);
      }
  }

  return (
      <>                
              { (isLogin) ?               
                  <h3>Welcome, {username}</h3>
                  :
                  <>
                      <input 
                              type="text" 
                              value={inputUsername} 
                              onChange={(e) => setInputUsername(e.target.value)} 
                          />
                      <button onClick={handleLogin}> "Please Login ! "</button> 
                  </>
              }   
                    
      </>
  );
};