"use client"

import React, { useContext, useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import { useAuth } from '../context/AuthContext';

export default function ChildComponent2() {
  
  const [inputUsername, setInputUsername] = useState("");
  const { theme, toggleTheme } = useTheme();
  const { isLogin, username, LoggedIn } = useAuth();

  const handleLogin = () => {
    if(inputUsername.trim()){
        LoggedIn(inputUsername);
    }
  }

  const styles = {
    backgroundColor: theme === 'light' ? '#fff' : '#333',
    color: theme === 'light' ? '#000' : '#fff',
    padding: '20px',
    borderRadius: '10px',
    textAlign: 'center',
  };

  return (
    <div style={styles}>
      <h2>Current Theme: {theme}</h2>
      <button onClick={toggleTheme}>
        Switch to {theme === 'light' ? 'dark' : 'light'}
      </button>
      <br /><br />
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
    </div>
  );
};

