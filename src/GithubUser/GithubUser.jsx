import { useEffect, useState } from "react";

export default function GithubUser({ username }) {
  const [userData, setUserData] = useState(null);
  useEffect(() => {
    fetch(`https://api.github.com/users/${username}`)
      .then((r) => r.json())
      .then((data) => setUserData(data));
  }, [username]);

  return (
    <div className="flex flex-col gap-4 w-2xs p-4">
      {userData && <h1 className="font-bold text-2xl">{userData.name}</h1>}
      {userData && <img className="" src={userData.avatar_url} />}
      {userData && <p className="">Username: {userData.login}</p>}
    </div>
  );
}
