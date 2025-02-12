import Hello from "./Hello";
import NewMessage from "./NewMessage";
import Welcome from "./ControlledForm/Welcome";

function App() {
  return (
    <div className="p-4">
      <Hello />
      <Hello />
      <Welcome name="Daniele" age={20} />
    </div>
  );
}

export default App;

// si, l'elemento Hello può essere inserito più di una volta, ciò renderà possibile la sua visualizzazione più di una volta
