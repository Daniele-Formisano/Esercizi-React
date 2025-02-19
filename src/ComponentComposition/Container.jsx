import { useState } from "react";

export default function Container({ title, children }) {
  const [collapsed, setCollapsed] = useState(false);

  function handleToggleCollapse() {
    setCollapsed((t) => !t);
  }

  return (
    <div className="border-2 border-red-700 bg-white">
      <div className="">
        {title}
        <button
          className="mx-2 px-4 py-2 bg-red-500 rounded text-white"
          onClick={handleToggleCollapse}
        >
          Toggle
        </button>
      </div>
      {collapsed && <div className="app-content">{children}</div>}
    </div>
  );
}
