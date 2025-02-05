import NewMessage from "./NewMessage";

export default function Hello() {
  return (
    <div>
      <h2 className="flex items-center justify-center text-4xl font-bold p-2 bg-blue-600">
        Hello, Wolrd!
      </h2>
      <NewMessage />
    </div>
  );
}
