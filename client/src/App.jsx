import Home from "./components/custom/Home";
import Joke from "./components/custom/Joke";
import Other from "./components/custom/Other";
import AppBar from "./components/mui/AppBar";
import { Outlet, useRoutes } from "react-router-dom";
import "./App.css";

function App() {
  const routes = useRoutes([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "jokes",
      element: (
        <div>
          <Joke />
        </div>
      ),
    },
    {
      path: "gfy",
      element: <Other />,
    },
  ]);

  return (
    <div className="App">
      <AppBar />
      {routes}
    </div>
  );
}

export default App;
