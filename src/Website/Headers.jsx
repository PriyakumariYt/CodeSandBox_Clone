import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import DataObjectIcon from "@mui/icons-material/DataObject";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";

const Headers = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <>
      <header>
        <nav>
          <h1>
            Priya Singh.
            {/* <CheckBoxOutlineBlankIcon style={{ color: "white", fontSize: "40px" }} /> */}
          </h1>

          <div className={`nav-links ${showMenu ? "active" : ""}`}>
            <ul>
              <li>
                <NavLink exact to="/" onClick={toggleMenu}>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/about" onClick={toggleMenu}>
                  About
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact" onClick={toggleMenu}>
                  Contact
                </NavLink>
              </li>
              <li>
                <NavLink to="/service" onClick={toggleMenu}>
                  Service
                </NavLink>
              </li>
            </ul>
          </div>
          <i
            id="menu-bar"
            className={`fas fa-bars ${showMenu ? "fa-times" : ""}`}
            onClick={toggleMenu}
          ></i>
        </nav>
      </header>
    </>
  );
};

export default Headers;
