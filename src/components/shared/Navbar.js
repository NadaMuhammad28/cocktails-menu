import { useState } from "react";
import Hamburger from "hamburger-react";
import { Link } from "react-router-dom";
import logo from "../../logo.9a3d2645.svg";
import "./navbar.css";
import NavLinks from "./navLinks";
const Navbar = () => {
  const [menu, setMenu] = useState("brgr-menu-content brgr-menu-content-hide");
  const toggleBrgrMenu = () => {
    menu === "brgr-menu-content brgr-menu-content-hide"
      ? setMenu("brgr-menu-content brgr-menu-content-clicked")
      : setMenu("brgr-menu-content brgr-menu-content-hide");
  };
  return (
    <nav>
      <div className="width-container">
        <div className="nav-center">
          <Link to="/">
            <img className="logo" src={logo} alt="cocktailddb brand" />
          </Link>

          <NavLinks />
          <div className="brger-btn">
            <Hamburger
              className="brger-btn"
              toggle={toggleBrgrMenu}
              toggled={menu === "brgr-menu-content brgr-menu-content-clicked"}
            />
          </div>
        </div>
      </div>

      <div className={menu}>
        <div className="width-container">
          <NavLinks />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
