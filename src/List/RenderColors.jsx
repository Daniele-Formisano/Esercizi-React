import Colors from "./Colors";

export default function RenderColors() {
  const colorsArray = [
    {
      id: 1,
      name: "red",
    },
    {
      id: 2,
      name: "blue",
    },
    {
      id: 3,
      name: "green",
    },
  ];
  return (
    <main>
      <h1 className="text-3xl font-bold p-4">Color list:</h1>
      <Colors colors={colorsArray} />
    </main>
  );
}
