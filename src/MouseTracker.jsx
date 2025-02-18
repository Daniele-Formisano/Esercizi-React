import { useEffect, useRef, useState } from "react";

export default function MouseTracker() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const positionRef = useRef(position);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const newPos = { x: e.clientX, y: e.clientY };
      positionRef.current = newPos;
      setPosition;
    };
  });
}
