import { Route, Routes, Link } from "react-router-dom";
import Welcome from "./Welcome";
import Counter from "./Counter";
import ShowGithubUser from "./ShowGithubUser";
import GithubUserList from "./GithubUserList";

export default function ReactRouter() {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/counter">Counter</Link>
      <Link to="/users">Users</Link>

      <Routes>
        <Route path="/" element={<Welcome name="Daniele" />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/users" element={<GithubUserList />}>
          <Route path=":username" element={<ShowGithubUser />} />
        </Route>
        <Route path="*" element={<h2>Not found</h2>} />
      </Routes>
    </div>
  );
}
