import React from "react";
import { NavLink } from "react-router-dom";
import "./header.css";

const Header = () => {
  return (
    <div className="header">
      <NavLink exact to="/" activeClassName="active">
        <h2>Games of Thrones</h2>
      </NavLink>
      <ul>
        <li>
          <NavLink to="/characters" activeClassName="active">
            Characters
          </NavLink>
        </li>
        <li>
          <NavLink to="/books/" activeClassName="active">
            Books
          </NavLink>
        </li>
        <li>
          <NavLink to="/houses" activeClassName="active">
            Houses
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Header;
