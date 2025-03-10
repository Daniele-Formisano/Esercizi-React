import { useState } from "react";
import CounterDisplay from "../StylingComponents/CounterDisplay";

export default function Counters({ initialValue = 0, incrementAmount = 1 }) {
  const [counter, setCounter] = useState(initialValue);

  function handleIncrement() {
    setCounter((c) => c + incrementAmount);
  }

  function handleDecrement() {
    setCounter((c) => c - incrementAmount);
  }

  function handleReset() {
    setCounter(initialValue);
  }

  return (
    <div className="mb-4">
      <CounterDisplay counter={counter} />
      <button
        className="mx-2 p-2 bg-red-500 rounded font-bold"
        type="button"
        onClick={handleIncrement}
      >
        Incrementa
      </button>
      <button
        className="mx-2 p-2 bg-blue-500 rounded font-bold "
        type="button"
        onClick={handleDecrement}
      >
        Decrementa
      </button>
      <button
        className="mx-2 p-2 bg-green-500 rounded font-bold"
        type="button"
        onClick={handleReset}
      >
        Resetta
      </button>
    </div>
  );
}
