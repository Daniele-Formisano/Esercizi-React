import Age from "./Age";
import Message from "./Message";

export default function Welcome({ name, age }) {
  return (
    <div>
      <p>
        Welcome, <strong>{name}</strong>
      </p>
      {age > 18 && <Age age={age} />}
      {age !== undefined && <Age age={age} />}
      {age > 18 && age < 65 && <Age age={age} />}
      {age > 18 && name === "Jhon" && <Age age={age} />}
      <Message age={age} />
    </div>
  );
}
