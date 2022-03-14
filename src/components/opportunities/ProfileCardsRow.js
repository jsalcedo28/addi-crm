import React from "react";
import ProfileCard from "./ProfileCard";

const ProfileCardRow = (props) => {
  return (
    <div className="grid-container-4 animate-bottom">
      {props.contacts.map((contact) => (
        <ProfileCard contact={contact} />
      ))}
    </div>
  );
};

export default ProfileCardRow;
