import { useRef, useState } from "react";

export default function Timer() {
  const [time, setTime] = useState(0);
  const timeRef = useRef(null);

  const startTimer = () => {
    if (!timeRef.current) {
      timeRef.current = setInterval(() => setTime((t) => t + 1), 1000);
    }

    const stopTimer = () => {
      clearInterval(timeRef.current);
      timeRef.current = null;
    };

    return (
      <div>
        <p>Tempo: {time}</p>
        <div>
          <button onClick={startTimer}>Start</button>
          <button onClick={stopTimer}>Stop</button>
        </div>
      </div>
    );
  };
}
