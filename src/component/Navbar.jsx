import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar navbar-dark navbar-expand-lg bg-primary">
      <div className="navbar-brand">Note App</div>
      <ul className="navbar-nav d-flex ">
        <li className="nav-item">
          <NavLink className={"nav-link"} to={"/home"}>
            Главная
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className={"nav-link"} to={"/about"}>
            Информация
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
