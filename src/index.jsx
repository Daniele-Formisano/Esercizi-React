import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import ControlledForm from "./ControlledForm/InteractiveWelcome.jsx";
import MultipleForm from "./MultipleForm.jsx";
import ValidatedForm from "./ValidatedForm.jsx";
import UncontrolledLogin from "./UncotrolledForm/UncontrolledForm.jsx";
import Login from "./ControlledForm/Login.jsx";
import InteractiveWelcome from "./ControlledForm/InteractiveWelcome.jsx";
import FocusableInput from "./Refs/FocusableInput.jsx";
import DomSample from "./DomSample.jsx";
import RenderState from "./RenderState.jsx";
import NotificationApp from "./NotificationApp.jsx";
import Events from "./Events/Events.jsx";
import Hello from "./Hello.jsx";
import HelloLanguage from "./Context.jsx/HelloLanguage.jsx";

createRoot(document.getElementById("root")).render(<App />);
