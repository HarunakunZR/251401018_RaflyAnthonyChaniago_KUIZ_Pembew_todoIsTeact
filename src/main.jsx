import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Router } from "./router.jsx";
import { TodoProvider } from "./context/TodoContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router>
      <TodoProvider>
        <App />
      </TodoProvider>
    </Router>
  </StrictMode>
);