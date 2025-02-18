import { NotificationProvider, useNotification } from "./NotificationContext";
import NotificationList from "./NotificationList";
import clsx from "clsx";

function App() {
  //qui si crea e richiama il componente principale
  //dell'applicazione e si inserirà nel provider delle notifiche

  const { addNotification } = useNotification();

  const handleAddNotification = () => {
    addNotification(`Questa è una notifica di tipo: ${type}`, type);
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">
        Gestione notifiche con useContext e useReducer
      </h1>
      <div className="flex items-center gap-2">
        <button
          onClick={handleAddNotification("info")}
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          Crea notifica info
        </button>

        <button
          onClick={handleAddNotification("success")}
          className="px-4 py-2 bg-green-500 text-white rounded"
        >
          Crea notifica di success
        </button>

        <button
          onClick={handleAddNotification("warning")}
          className="px-4 py-2 bg-yellow-500 text-white rounded"
        >
          Crea notifica di avviso
        </button>

        <button
          onClick={handleAddNotification("error")}
          className="px-4 py-2 bg-red-500 text-white rounded"
        >
          Crea notifica di errore
        </button>
      </div>
      <NotificationList />
    </div>
  );
}

export default function NotificationApp() {
  return (
    <NotificationProvider>
      <App />
    </NotificationProvider>
  );
}
