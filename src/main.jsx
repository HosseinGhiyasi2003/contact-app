import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import ContactsProvider from "./context/ContactsContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <ContactsProvider>
        <App />
      </ContactsProvider>
    </BrowserRouter>
  </StrictMode>
);
