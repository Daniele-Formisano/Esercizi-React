import { useState } from "react";
import clsx from "clsx";

export default function TodoListApp() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleAdd = () => {
    if (!newTask.trim()) return;
    const task = {
      id: Date.now(),
      text: newTask,
      completed: false,
    };
    setTasks([...tasks, task]); //task sarebbe la nostra const, aggiunge un NewTask con i vari dettagli
    setNewTask("");
  };

  const handleCompleted = (task) => {
    const updatedTasks = tasks.map((t) =>
      t.id === task.id ? { ...t, completed: !t.completed } : t
    );
  };

  const handleRemove = (task) => {
    const updatedTasks = tasks.filter((t) => t.id !== task.id);
    setTasks(updatedTasks);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-2xl mx-auto w-full">
        <h1 className="text-2xl font-bold mb-4">To do List</h1>
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Aggiungi task"
            className="border p-2 flex-grow rounded"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
          />
          <button
            onClick={handleAdd}
            className="bg-blue-500 text-white p-2 rounded"
          >
            Aggiungi
          </button>
        </div>
        <div>
          <ul className="mt-4">
            {tasks.map((task) => (
              <li
                key={task.id}
                className="flex justify-between items-center p-2 border-b"
              >
                <span
                  onClick={() => handleCompleted(task)}
                  className={clsx(
                    task.completed && "line-through text-gray-400",
                    "cursor-pointer hover:bg-gray-200 transition-all"
                  )}
                >
                  {task.text}
                </span>
                <button type="button" onClick={handleRemove(task)}>
                  Elimina
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
