import { Route, Routes } from "react-router-dom";
import Welcome from "./Welcome";
import Counter from "./Counter";
import ShowGithubUser from "./ShowGithubUser";
import GithubUserList from "./GithubUserList";

export default function ReactRouter() {
  return (
    <Routes>
      <Route path="/" element={<Welcome name="Daniele" />} />
      <Route path="/Counter" element={<Counter />} />
      <Route path="/users" element={<GithubUserList />}>
        <Route path=":username" element={<ShowGithubUser />} />
      </Route>
      <Route path="*" element={<h2>Not found</h2>} />
    </Routes>
  );
}
