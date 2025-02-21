import Hello from "./Hello";
import NewMessage from "./NewMessage";
import Welcome from "./ControlledForm/Welcome";
import AlertClock from "./Events/Events";
import LanguageContext from "./Context.jsx/Context";
import HelloLanguage from "./Context.jsx/HelloLanguage.jsx";
import { useState } from "react";

function App() {
  const [language, setLanguage] = useState("en");
  return (
    <LanguageContext.Provider value={language}>
      <label className="p-4">Select Language:</label>
      <select
        className="p-4"
        onChange={(e) => setLanguage(e.target.value)}
        value={language}
      >
        <option value="en">English</option>
        <option value="it">Italian</option>
        <option value="es">Spanish</option>
        <option value="fr">French</option>
      </select>
      <HelloLanguage />
    </LanguageContext.Provider>
  );
}
export default App;

// si, l'elemento Hello può essere inserito più di una volta, ciò renderà possibile la sua visualizzazione più di una volta
