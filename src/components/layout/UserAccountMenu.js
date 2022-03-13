import React from "react";

const UserAccountMenu = () => {
  return (
    <div className="right_menu">
      <ul>
        <li>
          <i className="fas fa-user"></i>
          <div className="profile_dd">
            <div className="dd_item">Profile</div>
            <div className="dd_item">Change Password</div>
            <div className="dd_item">Logout</div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default UserAccountMenu;
