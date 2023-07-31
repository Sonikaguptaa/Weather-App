import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "flex-end",
        fontWeight: "bold",
      }}
      className="nav"
    >
      <h1>Weather App</h1>

      <Link style={{ margin: "20px" }} to="/">
        <div>Home</div>
      </Link>

      <Link to="/weather">
        <div style={{ margin: "20px" }}>My Location</div>
      </Link>
      {/* <Link to="/MyLocations">
        <div style={{ margin: "20px" }}>MyLocation</div>
      </Link> */}
    </div>
  );
}

export default NavBar;
