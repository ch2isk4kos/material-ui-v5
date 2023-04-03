import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import "../App.css";

function Home() {
  return (
    <div className="Home">
      <header className="home-header">
        <h1>
          Are You Allowed
          <br />
          to Laugh?
        </h1>
        <Link to="/jokes">
          <Button variant="contained" color="primary">
            Yes
          </Button>
        </Link>
        <Link to="/gfy">
          <Button variant="contained" color="error">
            No
          </Button>
        </Link>
      </header>
    </div>
  );
}

export default Home;
