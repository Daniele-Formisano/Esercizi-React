import clsx from "clsx";
import { useRef, useState, useEffect } from "react";

export default function ReactApp3() {
  const [messages, setMessages] = useState([]);
  const [userInput, setUserInput] = useState("");
  const messagesEndRef = useRef(null);

  function handleSendMessage(e) {
    e.preventDefault();

    if (!userInput.trim()) return; // serve per evitare di inviare messaggi vuoti

    setMessages((prevMessages) => [
      ...prevMessages,
      { text: userInput, sender: "user" },
    ]);

    setTimeout(() => {
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: "Ciao! Sono un bot!", sender: "bot" },
      ]);
    }, 1000);

    setUserInput("");
  }

  useEffect(() => {
    // Scroll automatico alla fine della lista messaggi
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <main className="flex justify-center items-center h-screen">
      <div className="border-2 rounded-2xl flex flex-col gap-8">
        <div className="px-4 py-2">
          {messages.map((msg, index) => (
            <p
              key={index}
              className={clsx(
                "border-1 rounded-xl w-fit p-2 mb-6",
                msg.sender === "user"
                  ? "ml-auto bg-green-300"
                  : "mr-auto bg-white"
              )}
            >
              {msg.text}
            </p>
          ))}
          <div ref={messagesEndRef} />
        </div>
        <form className="flex justify-between" onSubmit={handleSendMessage}>
          <input
            className="grow rounded-4xl px-4 ml-4 my-2 border-1"
            type="text"
            placeholder="Chiedi qualcosa..."
            onChange={(e) => setUserInput(e.target.value)}
            value={userInput}
          />
          <button
            className={clsx(
              "mx-4 my-2 flex items-center justify-center w-10 h-10 rounded-full bg-green-500 text-white hover:cursor-pointer hover:bg-green-400"
            )}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
              />
            </svg>
          </button>
        </form>
      </div>
    </main>
  );
}
