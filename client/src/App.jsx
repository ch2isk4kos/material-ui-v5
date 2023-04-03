import Layout from "./components/layout/main";
import Home from "./components/Home";
import Jokes from "./components/Jokes";
import { Outlet, useRoutes } from "react-router-dom";
import "./App.css";

function App() {
  const routes = useRoutes([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/jokes",
      element: <Jokes />,
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
