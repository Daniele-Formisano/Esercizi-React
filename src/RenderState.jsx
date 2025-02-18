import { useRef, useState } from "react";

export default function RenderState() {
  const [count, setCount] = useState(0);
  const renderCount = useRef(0);

  renderCount.current++;

  return (
    <div>
      <p>Conteggio:{count} </p>
      <p>Conteggio:{renderCount.current} </p>
      <div>
        <button
          type="button"
          onClick={() => {
            setCount(count + 1);
          }}
        >
          Incrementa
        </button>
      </div>
    </div>
  );
}
