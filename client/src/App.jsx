import Layout from "./components/custom/layouts/main";
import Home from "./components/custom/Home";
import Categories from "./components/custom/Categories";
import Other from "./components/custom/Other";
import { useRoutes } from "react-router-dom";
import "./App.css";

function App() {
  const routes = useRoutes([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/jokes",
      element: <div>Just Jokes</div>,
      children: [
        {
          path: "/jokes/categories",
          element: <Categories />,
        },
      ],
    },
    {
      path: "/gfy",
      element: <Other />,
    },
  ]);

  return (
    <div className="App">
      <Layout />
      {routes}
    </div>
  );
}

export default App;
