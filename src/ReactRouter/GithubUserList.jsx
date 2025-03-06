import { useEffect } from "react";
import { useState } from "react";
import { Link, Outlet } from "react-router-dom";

export default function GithubUserList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/users")
      .then((r) => {
        if (r.status === 200) {
          return r.json();
        } else {
          console.log("Si è verificato un errore");
          return;
        }
      })
      .then((data) => setUsers(data || users));
  }, []);

  return (
    <div className="p-4 flex">
      <div className="grow">
        <h2 className="text-xl font-bold mb-2">Github Users</h2>
        <ul className="p-4">
          {users.map((user) => (
            <li className="underline text-blue-600" key={user.id}>
              <Link to={`/users/${user.login}`}>{user.login}</Link>
            </li>
          ))}
        </ul>
      </div>

      <Outlet />
    </div>
  );
}
