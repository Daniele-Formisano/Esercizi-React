import { createContext, useContext, useReducer } from "react";

const ADD_NOTIFICATION = "ADD_NOTIFICATION";
const REMOVE_NOTIFICATION = "REMOVE_NOTIFICATION";

const initialState = [];

function notificationReducer(state, action) {
  switch (action.type) {
    case ADD_NOTIFICATION:
      return [...state, action.payload];
    case REMOVE_NOTIFICATION:
      return state.filter(
        (notification) => notification.id !== action.playload
      );
    default:
      return state;
  }
}

const NotificationStateContext = createContext();
const NotificationDispatchContext = createContext();

export function NotificationProvider({ children }) {
  const [state, dispatch] = useReducer(notificationReducer, initialState);

  return (
    <NotificationStateContext.Provider value={dispatch}>
      <NotificationDispatchContext.Provider>
        {children}
      </NotificationDispatchContext.Provider>
    </NotificationStateContext.Provider>
  );
}

export function useNotificationState() {
  const context = useContext(NotificationStateContext);
  if (context === undefined) {
    throw new Error(
      "useNotificationState deve essere usato all'interno di un NotificationProvider"
    );
  }
}

export function useNotificationDispatch() {
  const context = useContext(NotificationDispatchContext);
  if (context === undefined) {
    throw new Error(
      "useNotificationDispatch deve essere usato all'interno di un NotificationProvider"
    );
  }
}

export function useNotification() {
  const dispatch = useNotificationDispatch();

  function addNotification(message, type = "info") {
    const id = Date.now();
    dispatch({
      type: ADD_NOTIFICATION,
      payload: { id, message, type },
    });

    setTimeout(() => {
      dispatch({
        type: REMOVE_NOTIFICATION,
        payload: id,
      });
    }, 7000);
  }

  function removeNotification(id) {
    dispatch({
      type: REMOVE_NOTIFICATION,
      payload: id,
    });
  }

  return { addNotification, removeNotification };
}
