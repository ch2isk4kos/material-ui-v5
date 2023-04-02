import React from "react";
import ReactDOM from "react-dom/client";
// React Router imports
import { RouterProvider } from "react-router-dom";
import { router } from "./router.config";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
