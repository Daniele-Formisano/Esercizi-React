import { useState } from "react";

export function useCounter({ initialValue = 0 }) {
  const [counter, setCounter] = useState(initialValue);

  const handleIncrement = () => {
    setCounter((c) => c + 1);
  };

  const handleDecrement = () => {
    setCounter((c) => c - 1);
  };

  const handleReset = () => {
    setCounter(initialValue);
  };

  return {
    counter: counter,
    onIncrement: handleIncrement,
    onDecrement: handleDecrement,
    onReset: handleReset,
  };
}
