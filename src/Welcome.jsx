import Age from "./Age";

export default function Welcome({ name, age }) {
  return (
    <div>
      <p>
        Welcome, <strong>{name}</strong>
      </p>
      <Age age={age} />
    </div>
  );
}
