import React from "react";
import ReactDOM from "react-dom/client";
// React Router imports
// import { RouterProvider } from "react-router-dom";
// import { router } from "./router.config";
// Material UI Components
// import { Container } from "@mui/material";
// Custom Components
import App from "./App";
// import "./index.css";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <Container maxWidth="lg"> */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
    {/* </Container> */}
  </React.StrictMode>
);
