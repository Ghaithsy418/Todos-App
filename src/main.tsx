import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { TodosProvider } from "./context/useTodos.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <TodosProvider>
      <App />
    </TodosProvider>
  </StrictMode>,
);
