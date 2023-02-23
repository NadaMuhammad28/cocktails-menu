import { Link } from "react-router-dom";
import DarkMode from "../darkmode/darkmode";

const NavLinks = () => {
  return (
    <ul className="nav-links">
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="about">About</Link>
      </li>
      <li>
        <DarkMode />
      </li>
    </ul>
  );
};

export default NavLinks;
