import { Link } from "react-router-dom";



function NavBar() {
  return (
    <div>
      <div id="heading"><h1>Exact Weather</h1></div>

      <div className="nav">
        <Link style={{ margin: "10px" }} to="/">
          <div>Home</div>
        </Link>

        <Link to="/MajorCity">
          <div style={{ margin: "10px" }}>Major City</div>
        </Link>

        <Link to="/Forecast"> <div style={{ margin: "10px" }}>
          Forecast</div>
        </Link>


      </div>

    </div >
  );
}

export default NavBar;
