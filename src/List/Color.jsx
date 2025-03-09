import clsx from "clsx";

export default function Color({ color }) {
  return (
    <li
      className={clsx("px-4 py-2 text-white", {
        "bg-red-800": color.name === "red",
        "bg-blue-800": color.name === "blue",
        "bg-green-800": color.name === "green",
      })}
    >
      {color.name}
    </li>
  );
}
