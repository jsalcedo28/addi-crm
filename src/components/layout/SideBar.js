import React from "react";
import { NavLink } from "react-router-dom";

const SideBar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar__inner">
        <div className="profile">
          <div className="img">
            <img
              style={{ borderRadius: "50%" }}
              src="img/profile-pic.jpg"
              alt="profile_pic"
            />
          </div>
          <div className="profile_info">
            <p>Welcome</p>
            <p className="profile_name">Juan C. Perez</p>
          </div>
        </div>
        <ul>
          <li>
            <NavLink exact activeClassName="active" to="/">
              <span className="icon">
                <i className="fas fa-dice-d6"></i>
              </span>
              <span className="title">Dashboard</span>
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="active" to="/opportunities">
              <span className="icon">
                <i className="fas fa-users"></i>
              </span>
              <span className="title">Opportunities</span>
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
