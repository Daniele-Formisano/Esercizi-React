import { useState } from "react";
import Clock from "./Clock";

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

  console.log(counter);

  return (
    <div className="mb-4">
      <h2 className="text-2xl p-6 mb-4">{counter}</h2>
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

      <Clock />
    </div>
  );
}
