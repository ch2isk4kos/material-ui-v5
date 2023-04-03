import Layout from "./components/custom/layout/main";
import Home from "./components/custom/Home";
import Jokes from "./components/custom/Jokes";
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
      element: <Jokes />,
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
