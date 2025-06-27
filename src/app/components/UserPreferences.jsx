import React from 'react';
import useLocalStorage from './../customHook/useLocalStorage';

export default function UserPreferences() {
  const { value: theme, setItem: setTheme, removeItem: resetTheme } =
    useLocalStorage('theme', 'light');

  return (
    <div>
      <h2>User Preferences</h2>
      <p>Current Theme: <strong>{theme}</strong></p>

      <button onClick={() => setTheme('light')}>Set Light Theme</button>
      <button onClick={() => setTheme('dark')}>Set Dark Theme</button>
      <button onClick={resetTheme}>Reset Theme</button>
    </div>
  );
}
