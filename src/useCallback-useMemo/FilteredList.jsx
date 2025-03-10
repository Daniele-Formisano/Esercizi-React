import { useMemo } from "react";

export default function FilteredList({ list }) {
  const filteredList = useMemo(() => {
    return list.filter((user) => user.age > 18);
  }, [list]);

  return (
    <div className="flex flex-col justify-center items-center p-4">
      <h2 className="text-3xl font-bold mb-6">Lista di studenti:</h2>
      {filteredList.map((item) => (
        <p className="mb-2 text-red-500" key={item.id}>
          {item.name}, {item.age}
        </p>
      ))}
    </div>
  );
}
