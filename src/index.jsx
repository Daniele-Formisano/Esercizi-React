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

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <FocusableInput />
  </StrictMode>
);
