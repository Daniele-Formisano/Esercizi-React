import { useEffect, useState } from "react";
import GithubUser from "./GithubUser";

export default function GithubUsers() {
  const [users, setUsers] = useState([]);
  const [username, setUsername] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!username.trim()) return;
    setUsers((prevUsers) => [username, ...prevUsers]);

    setUsername("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Inserisci un username"
        />
        <button type="submit">Cerca</button>
      </form>
      <ul>
        {users.map((user) => (
          <GithubUser key={user} username={user} />
        ))}
      </ul>
    </div>
  );
}
