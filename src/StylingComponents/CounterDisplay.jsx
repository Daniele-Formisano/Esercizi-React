export default function CounterDisplay({ counter }) {
  const styledComponent = {
    fontSize: "large",
    fontWeight: "bold",
  };

  return (
    <div>
      <h2 style={styledComponent}>{counter}</h2>
    </div>
  );
}
