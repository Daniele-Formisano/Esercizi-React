import { createContext, useContext, useState } from "react";
import LanguageContext from "./Context";

export default function Hello() {
  const language = useContext(LanguageContext);

  const messages = {
    en: "Hello, World!",
    it: "Ciao, Mondo!",
    es: "Hola, Mundo!",
    fr: "Bonjour, le Monde!",
  };

  return (
    <h2 className="text-xl font-bold p-8">
      {messages[language] || messages.en}
    </h2>
  );
}
