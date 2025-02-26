import { useForm } from "./useForm";

export default function Form() {
  const [values, handleChange] = useForm({});

  console.log(values);

  return (
    <div>
      <form>
        <input
          onChange={handleChange}
          value={values.username}
          type="text"
          name="username"
          placeholder="Inserisci username"
        />
        <input
          onChange={handleChange}
          value={values.password}
          type="password"
          name="password"
          placeholder="Inserisci password"
        />
      </form>
    </div>
  );
}
