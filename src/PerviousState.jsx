import { useEffect, useState } from "react";

export default function PreviousState() {
  const [count, setCount] = useState(0);
  const prevCount = useRef();

  useEffect(() => {
    prevCount.current = count;
  }, [count]);

  return (
    <div>
      {" "}
      <p>Conteggio:{count} </p>
      <p>Conteggio precedemte:{prevCount.current} </p>
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
