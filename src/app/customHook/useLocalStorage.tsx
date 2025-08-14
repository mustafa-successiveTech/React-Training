import { useState } from "react";

export default function useLocalStorage <T> (key: string, initialValue: T) {

  const getStoredValue = (): T => {
    const stored = localStorage.getItem(key);
    return stored ? JSON.parse(stored) : initialValue;
  };

  const [value, setValue] = useState<T>(getStoredValue);

  const setItem = (newValue: T) => {
    setValue(newValue);
    localStorage.setItem(key, JSON.stringify(newValue));
  };

  const removeItem = () => {
    localStorage.removeItem(key);
    setValue(initialValue);
  };

  return { value, setItem, removeItem };
}
