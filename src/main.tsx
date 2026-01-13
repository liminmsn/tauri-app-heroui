import React from "react";
import ReactDOM from "react-dom/client";
import { BZHProvider } from "./context";
import App from "./App";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // 必须引入样式

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BZHProvider>
      <App />
      <ToastContainer />
    </BZHProvider>
  </React.StrictMode>,
);
