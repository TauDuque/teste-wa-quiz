import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { AppProvider } from "./context/context";
import { UserProvider } from "./context/user_context";

ReactDOM.render(
  <React.StrictMode>
    <AppProvider>
      <UserProvider>
        <App />
      </UserProvider>
    </AppProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
