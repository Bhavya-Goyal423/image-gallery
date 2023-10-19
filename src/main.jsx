import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import CustomContext from "./CustomContext.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CustomContext>
      <App />
    </CustomContext>
  </React.StrictMode>
);
