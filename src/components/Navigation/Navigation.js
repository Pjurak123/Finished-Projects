import React, { useState } from "react";
import logo from "../../images/logo.svg";
import hamb from "../../images/icon-hamburger.svg";
import close from "../../images/icon-close.svg";
import "../Navigation/Navigation.css";
import "../Hamburger/Hamburger.css";
import { MenuItems } from "./MenuItems";
import Button from "../Button/Button";

function Navigation() {
  const [state, setState] = useState(false);

  const handleClick = () => {
    setState(!state);
    console.log();
  };

  return (
    <nav className="NavbarItems">
      <img src={logo} alt="logo-img" className="logo" />
      <div className="menu-icon" onClick={handleClick}>
        <img src={state ? close : hamb} alt="hamb" className="hamb" />
      </div>
      <ul className={state ? "nav-menu active" : "nav-menu"}>
        {MenuItems.map((item, index) => {
          return (
            <li key={index} className="Nav-items">
              <a className={item.cName} href={item.url}>
                {item.title}
              </a>
            </li>
          );
        })}
      </ul>
      <Button />
    </nav>
  );
}

export default Navigation;
