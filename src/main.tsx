import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BZHProvider } from "./context";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BZHProvider>
      <App />
    </BZHProvider>
  </React.StrictMode>,
);
