import AppBar from "../mui/AppBar";
import { Outlet } from "react-router-dom";
import "../../App.css";

function Layout() {
  return (
    <div className="Layout">
      <AppBar />
      <Outlet />
    </div>
  );
}

export default Layout;
