import React from "react";
import ReactDOM from "react-dom/client";
// React Router imports
import { RouterProvider } from "react-router-dom";
import { router } from "./router.config";
// Material UI Components
import { Container } from "@mui/material";
// Custom Components
import AppBar from "./components/mui/AppBar";
// import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Container maxWidth="lg">
      <AppBar />
    </Container>
    <RouterProvider router={router} />
  </React.StrictMode>
);
