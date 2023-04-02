// React Router imports
import { createBrowserRouter } from "react-router-dom";
// Components
import Home from "./components/Home";
import Jokes from "./components/Jokes";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/jokes",
    element: <Jokes />,
  },
]);
