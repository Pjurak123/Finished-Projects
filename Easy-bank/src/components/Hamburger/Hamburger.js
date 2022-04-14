import React from "react";
import hamb from "../../images/icon-hamburger.svg";

function Hamburger() {
  return (
    <div className="hamburger">
      <img src={hamb} alt="Hamburger-menu-icon" className="hamburger-logo" />
    </div>
  );
}

export default Hamburger;
