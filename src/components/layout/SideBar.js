import React from "react";

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
            <a href="index.html">
              <span className="icon">
                <i className="fas fa-dice-d6"></i>
              </span>
              <span className="title">Dashboard</span>
            </a>
          </li>
          <li>
            <a href="contacts.html" className="active">
              <span className="icon">
                <i className="fas fa-users"></i>
              </span>
              <span className="title">Opportunities</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
