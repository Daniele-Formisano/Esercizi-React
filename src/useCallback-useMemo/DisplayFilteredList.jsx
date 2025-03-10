import FilteredList from "./FilteredList";

export default function DisplayFiltereList() {
  const userList = [
    {
      id: 1,
      name: "Daniele",
      age: 20,
    },
    {
      id: 2,
      name: "Manuel",
      age: 24,
    },
    {
      id: 3,
      name: "Sara",
      age: 23,
    },
    {
      id: 4,
      name: "Miriam",
      age: 13,
    },
  ];
  return (
    <div>
      <FilteredList list={userList} />
    </div>
  );
}
