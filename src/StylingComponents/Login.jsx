import { useState } from "react";

export default function Login({ onLogin }) {
  const [data, setData] = useState({
    username: "",
    password: "",
    remember: false,
  });

  function handleLogin(event) {
    event.preventDefault();
    onLogin(data);
  }

  function handleInputChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    const checked = event.target.checked;

    setData((data) => {
      return {
        ...data,
        [name]: value,
      };
    });
  }

  function handleReset() {
    setData({
      username: "",
      password: "",
      remember: false,
    });
  }

  const styledLogin = {
    backgroundColor: data.password.length < 8 ? "red" : "green",
  };

  return (
    <div>
      <form
        onSubmit={handleLogin}
        className="border-2 p-6 flex flex-col gap-6 "
      >
        <label>Username</label>
        <input
          className="border-1 w-2xs"
          onChange={handleInputChange}
          type="text"
          name="username"
          value={data.username}
        />
        <label>Password</label>
        <input
          style={styledLogin}
          className="border-1 w-2xs"
          onChange={handleInputChange}
          type="password"
          name="password"
          value={data.password}
        />

        <input
          onChange={handleInputChange}
          type="checkbox"
          checked={data.remember}
          name="remember"
          className="w-5 h-5"
        />
        <span>Remember me</span>

        <button
          className="bg-blue-500 text-white p-2 rounded disabled:opacity-50"
          disabled={!data.username || !data.password}
          type="submit"
        >
          Login
        </button>
        <button onClick={handleReset}>Reset</button>
      </form>
      <pre> {JSON.stringify(data, null, 2)} </pre>
    </div>
  );
}
