import Hello from "./Hello";
import NewMessage from "./NewMessage";

function App() {
  return (
    <div>
      <Hello />
      <NewMessage />
      <Hello />
      <NewMessage />
    </div>
  );
}

export default App;

// si, l'elemento Hello può essere inserito più di una volta, ciò renderà possibile la sua visualizzazione più di una volta
