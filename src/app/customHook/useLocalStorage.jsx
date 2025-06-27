import { useState } from 'react';

export default function useLocalStorage(key, initialValue) {
  const getStoredValue = () => {
    const stored = localStorage.getItem(key);
    return stored ? JSON.parse(stored) : initialValue;
  };

  const [value, setValue] = useState(getStoredValue);

  const setItem = (newValue) => {
    setValue(newValue);
    localStorage.setItem(key, JSON.stringify(newValue));
  };

  const removeItem = () => {
    localStorage.removeItem(key);
    setValue(initialValue);
  };

  return { value, setItem, removeItem };
}
