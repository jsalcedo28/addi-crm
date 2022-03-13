import React from "react";
import UserAccountMenu from "./UserAccountMenu";

const TopBar = () => {
  return (
    <div className="top_navbar">
      <div className="hamburger">
        <div className="hamburger__inner">
          <div className="one"></div>
          <div className="two"></div>
          <div className="three"></div>
        </div>
      </div>
      <div className="menu">
        <div className="logo">
          <img src="img/logo.png" alt="Addi CRM Logo" height="40" />
        </div>
        <UserAccountMenu />
      </div>
    </div>
  );
};

export default TopBar;
