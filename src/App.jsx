import Hello from "./Hello";
import NewMessage from "./NewMessage";
import Welcome from "./Welcome";

function App() {
  return (
    <div className="p-4">
      <Hello />
      <NewMessage />
      <Hello />
      <NewMessage />
      <Welcome name="Daniele" age={20} />
    </div>
  );
}

export default App;

// si, l'elemento Hello può essere inserito più di una volta, ciò renderà possibile la sua visualizzazione più di una volta
