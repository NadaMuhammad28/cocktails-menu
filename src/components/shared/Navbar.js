import { Link } from "react-router-dom";
import logo from "../../logo.9a3d2645.svg";
import DarkMode from "../darkmode/darkmode";
import "./navbar.css";
const Navbar = () => {
  return (
    <nav>
      <div className="width-container">
        <div className="nav-center">
          <img className="logo" src={logo} />
          <ul className="nav-links">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="about">About</Link>
            </li>
          </ul>
          <DarkMode />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
