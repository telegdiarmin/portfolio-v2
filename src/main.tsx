import { StrictMode } from "react";

import App from "./App.tsx";
import "@/styles/global.scss";
import { createRoot } from "react-dom/client";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
