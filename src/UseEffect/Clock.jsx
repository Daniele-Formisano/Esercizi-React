import { useEffect, useState } from "react";

export default function Clock() {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    setInterval(() => setDate(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="p-4 border rounded">
      <h2 className="text-2xl font-bold text-red-500">
        Current time: {date.toLocaleTimeString()}
      </h2>
    </div>
  );
}
