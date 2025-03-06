import { useState } from "react";
import Welcome from "../ReactRouter/Welcome";

export default function InteractiveWelcome() {
  const [username, setUsername] = useState("");

  function handleUsernameInput(event) {
    setUsername(event.target.value);
  }

  return (
    <div className="m-2 p-8 border-2 flex flex-col gap-4">
      <label className="text-xl">Inserisci il tuo nome</label>
      <input
        className="border-2 rounded-sm w-40 mb-4"
        name="username"
        value={username}
        onChange={handleUsernameInput}
      />
      <Welcome name={username} />
    </div>
  );
}
