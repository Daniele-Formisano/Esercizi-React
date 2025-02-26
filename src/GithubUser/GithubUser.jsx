import { useEffect, useState } from "react";

export default function GithubUser({ username }) {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(`https://api.github.com/users/${username}`).then((r) =>
      r.json().then((data) => setData(data))
    );
  }, [username]);

  return (
    <div className="flex flex-col gap-4 w-2xs p-4">
      {data && <h1 className="font-bold text-2xl">{data.name}</h1>}
      {data && <img className="" src={data.avatar_url} />}
      {data && <p className="">Username: {data.login}</p>}
    </div>
  );
}
