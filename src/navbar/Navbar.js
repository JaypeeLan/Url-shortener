import { useRef } from "react";
import "./Nav.css";
import "../Intro/intro.css";
import logo from "../images/logo.svg";

const Navbar = () => {
  const navList = useRef(null);

  const showNav = () => {
    // You can also use state or target to update/toggle classname/classlist
    if (navList.current.className === " ") {
      navList.current.className = "active";
    } else {
      navList.current.className = " ";
    }
  };
  return (
    <header className="Navigation">
      <div className="Nav">
        <img src={logo} alt="logo" />
        <ul id="navbar" className=" " ref={navList}>
          <li>Features</li>
          <li>Pricing</li>
          <li>Resources</li>
          <li className="btn" style={{ marginTop: "0px" }}>
            Login
          </li>
        </ul>

        <div id="mobileNav" onClick={showNav}>
          <span></span>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
