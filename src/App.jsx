import Hello from "./Hello";
import NewMessage from "./NewMessage";
import Welcome from "./ControlledForm/Welcome";
import AlertClock from "./Events/Events";

function App() {
  function handleButtonClick() {
    const nowDate = new Date();
    alert(`The current time is ${nowDate.toLocaleTimeString()}`);
  }
  return (
    <div className="p-4">
      <AlertClock onButtonClick={handleButtonClick} />
    </div>
  );
}

export default App;

// si, l'elemento Hello può essere inserito più di una volta, ciò renderà possibile la sua visualizzazione più di una volta
