// Importando as libs ESSENCIAIS (React e ReactDOM).
import React from "react";
import ReactDOM from "react-dom/client";

// Importando o principal componente, arquivo em que carregamos os elementos da página.
import App from "./App.jsx";

// Importando o CSS externo
import "./index.css";

// Iniciando os recursos do React, manipulando a div#root existente na index.html
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
