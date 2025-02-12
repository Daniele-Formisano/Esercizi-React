import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import ControlledForm from "./InteractiveWelcome.jsx";
import MultipleForm from "./MultipleForm.jsx";
import ValidatedForm from "./ValidatedForm.jsx";
import UncontrolledLogin from "./UncontrolledForm.jsx";
import Login from "./Login.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <UncontrolledLogin />
  </StrictMode>
);
