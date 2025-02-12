export default function UncontrolledLogin() {
  function handleSubmit(event) {
    event.preventDefault();

    const username = event.target.elements.namedItem("username").value;
    const password = event.target.elements.namedItem("password").value;
    const session = event.target.elements.namedItem("session").checked;

    const data = {
      username,
      password,
      session,
    };

    console.log(data);
  }

  function loginWithFormData(event) {
    event.preventDefault();

    const formData = new FormData(event.target);

    const data = {
      username: formData.get("username"),
      password: formData.get("password"),
      session: formData.get("session") === "on" ? true : false,
    };

    console.log(data);
  }

  return (
    <form onSubmit={handleSubmit} className="p-4 flex gap-4">
      <h1 className="text-2xl">Uncontrolled Login</h1>
      <input className="border-2" name="username" />
      <input className="border-2" name="password" type="password" />
      <input className="border-2" name="session" type="checkbox" />
      <button id="login" className="bg-amber-200 rounded-xl p-2" type="submit">
        Login
      </button>
      <button
        id="formLogin"
        className="bg-blue-500 rounded-xl p-2 text-white"
        type="button"
      >
        FormData Login
      </button>
    </form>
  );
}
