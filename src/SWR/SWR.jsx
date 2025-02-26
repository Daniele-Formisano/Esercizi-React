import { useGithubUser } from "./useGithubUser";
import { useState } from "react";

const fetcher = (url) => fetch(url).then((r) => r.json());

export default function SWR() {
  const [usernameInput, setUsernameInput] = useState("");
  const [username, setUsername] = useState("");
  const { data: user, error, refetch } = useGithubUser(username);

  return (
    <div>
      <div>
        <h2 className="p-4 text-xl font-bold">Search a username:</h2>
        <input
          className="border-2 p-2 bg-gray-200 mx-4"
          type="text"
          placeholder="Enter a username"
          value={usernameInput}
          onChange={(e) => setUsernameInput(e.target.value)}
        />
        <button
          className="p-2 rounded bg-blue-200 hover:cursor-pointer hover:bg-blue-600 hover:text-white"
          type="button"
          onClick={() => setUsername(usernameInput)}
        >
          Cerca
        </button>
      </div>
      <div className="flex flex-col gap-4 w-2xs p-4">
        {user && <h1 className="font-bold text-2xl">{user.name}</h1>}
        {user && <img className="" src={user.avatar_url} />}
        {user && <p className="">Username: {user.login}</p>}
      </div>
    </div>
  );
}
