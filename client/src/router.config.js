// React Router imports
import { createBrowserRouter } from "react-router-dom";
// Components
import Home from "./components/Home";
import Posts from "./components/posts/Posts";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "posts",
    element: <Posts />,
  },
]);
