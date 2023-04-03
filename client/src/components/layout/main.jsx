import AppBar from "../mui/AppBar";
import "../../App.css";

function Layout({ children }) {
  return (
    <div className="Layout">
      <AppBar />
      {children}
    </div>
  );
}

export default Layout;
