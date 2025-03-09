import { useState } from "react";

export default function TodoList() {
  const [todos, setTodos] = useState([]);
  const [todoInput, setTodoInput] = useState("");

  // funzione per aggiungere una nuova todo
  function handleAddTodo(e) {
    e.preventDefault();
    if (!todoInput.trim()) return;
    const todo = {
      id: Date.now(),
      text: todoInput,
    };
    setTodos([...todos, todo]);
    setTodoInput("");
  }

  // funzione per rimuovere una todo esistente
  function handleRemoveTodo(todo) {
    setTodos(todos.filter((t) => t.id !== todo.id));
  }

  // funzione per resettare le todo
  function handleReset() {
    setTodos([]);
  }

  return (
    <main className="flex flex-col gap-6 items-center justify-center p-8 border-1 rounded">
      <div className="">
        <h1 className="text-2xl font-bold mb-4">
          Scrivi, crea e leggi le tue todo
        </h1>
        <form onSubmit={handleAddTodo}>
          <input
            className="border-1 px-4 py-2 mr-8"
            type="text"
            value={todoInput}
            onChange={(e) => setTodoInput(e.target.value)}
            placeholder="Aggiungi una nuova todo..."
          />
          <button
            className="rounded px-4 py-2 bg-green-800 text-white hover:bg-green-400 hover:cursor-pointer"
            type="submit"
            onClick={handleAddTodo}
          >
            Aggiungi todo
          </button>
        </form>
      </div>
      <ul>
        {todos.map((todo) => (
          <li className="border-1 px-4 py-2 mb-2" key={todo.id}>
            {todo.text}
            <button
              className="ml-8 rounded px-4 py-2 bg-red-800 text-white hover:bg-red-400 hover:cursor-pointer"
              type="button"
              onClick={() => handleRemoveTodo(todo)}
            >
              Elimina
            </button>
          </li>
        ))}
      </ul>
      <div>
        <button
          className="rounded px-4 py-2 bg-red-800 text-white hover:bg-red-400 hover:cursor-pointer"
          type="button"
          onClick={handleReset}
        >
          Resetta le tue todo
        </button>
      </div>
    </main>
  );
}
