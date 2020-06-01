import { useState } from 'react';

/**
 *
 * @param key localstorage key
 * @param initialValue initial value for key
 */
const useLocalStorage = (key: string, initialValue: string) => {
  const [storedValue, setStoredValue] = useState<string>(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      // If error also return initialValue
      console.log(error);
      return initialValue;
    }
  });

  const setValue = (value: string | Function) => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.log(error);
    }
  };

  return [storedValue, setValue];
};

export default useLocalStorage;
