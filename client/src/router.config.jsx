// React Router imports
import { createBrowserRouter } from "react-router-dom";
// Components
import Home from "./components/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/jokes",
    element: (
      <div>
        <h1>Jokes</h1>
      </div>
    ),
  },
]);
