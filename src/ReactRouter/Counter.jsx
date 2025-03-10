export default function Counter() {
  const { counter, onIncrement, onDecrement, onReset } = useCounter(0);

  return (
    <div>
      <p>Il contatore è {counter}</p>
      <button className="p-2 rounded bg-blue-300" onClick={onIncrement}>
        Incrementa
      </button>
      <button className="p-2 rounded bg-green-300" onClick={onDecrement}>
        Decrementa
      </button>
      <button className="p-2 rounded bg-yellow-300" onClick={onReset}>
        Resetta
      </button>
    </div>
  );
}
