import { useCallback, useEffect, useState } from "react";

const url = "https://jsonplaceholder.typicode.com/users";

export default function UsersWithoutCallback() {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch(url)
      .then((r) => r.json())
      .then((data) => setUsers(data));
  }, []);

  const filterUsers = useCallback(
    () => users.filter((user) => user.name.includes(search)),
    [users, search]
  );

  return (
    <div>
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Cerca..."
      />
      <ul>
        {filterUsers().map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}
