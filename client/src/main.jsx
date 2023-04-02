import React from "react";
import ReactDOM from "react-dom/client";
// React Router imports
import { RouterProvider } from "react-router-dom";
import { router } from "./router.config";
// Custom Components
import AppBar from "./components/AppBar";
// import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AppBar />
    <RouterProvider router={router} />
  </React.StrictMode>
);
