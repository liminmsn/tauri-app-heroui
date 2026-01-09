import React from "react";
import ReactDOM from "react-dom/client";
import { BZHProvider } from "./context";
import { RouterProvider } from "react-router";
import router from "./router";


ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BZHProvider>
      <RouterProvider router={router} />
    </BZHProvider>
  </React.StrictMode>,
);
