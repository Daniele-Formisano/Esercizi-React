import { useEffect, useRef } from "react";

export default function FocusableInput() {
  const mountedRef = useRef(false);
  const inputRef = useRef(null);

  useEffect(() => {
    if (!mountedRef.current) {
      mountedRef.current = true;
      console.log("Input mounted for the first time");
    } else {
      console.log("Mountend for the second time");
    }

    inputRef.current?.focus();
  }, []);

  return (
    <input
      ref={inputRef}
      className="border-2 p-4 m-2"
      name="username"
      type="text"
    />
  );
}
