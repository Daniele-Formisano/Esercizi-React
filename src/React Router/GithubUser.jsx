import { useEffect, useState } from "react";

export default function GithubUser({ username }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch(`https://api.github.com/users/${username}`)
      .then((r) => r.json())
      .then((data) => setUser(data));
  }, [username]);

  if (!user) return <p>Caricamento...</p>;

  return (
    <div className="mr-20">
      <h2 className="text-xl flex- font-bold p-4">{user.login}</h2>
      <img src={user.avatar_url} alt={user.login} width="200" />
    </div>
  );
}
