import { useState } from "react";
import Welcome from "./Welcome";

export default function InteractiveWelcome() {
  return (
    <div>
      <input name="username" />
      <Welcome />
    </div>
  );
}
