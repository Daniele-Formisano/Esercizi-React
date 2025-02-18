export default function AlertClock({ onButtonClick }) {
  return (
    <div>
      <p className="font-bold text-2xl">
        Click the button to show current time!
      </p>
      <button
        className="px-4 py-2 border-2 rounded-xl bg-red-600 text-white"
        onClick={onButtonClick}
      >
        Click me!
      </button>
    </div>
  );
}
