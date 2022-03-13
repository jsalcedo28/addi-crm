import React from "react";

const ProfileCard = (props) => {
  return (
    <div className="column">
      <div className="card">
        <img
          src={props.contact.imgUrl}
          alt={props.contact.firstName}
          style={{ width: "100%" }}
        />
        <h1>
          {props.contact.firstName} {props.contact.lastName}
        </h1>
        <p className="title">
          <i className="fa fa-address-card-o"></i> {props.contact.nationalID}
        </p>
        <p>
          <i className="fa fa-envelope"></i> {props.contact.email}
        </p>
        <p>
          <i className="fa fa-birthday-cake"></i> {props.contact.birthdate}
        </p>
        <div className="tags-section">
          <span className="label other">{props.contact.score} Score</span>
          {props.contact.type === "Lead" ? (
            <span className="label info">{props.contact.type}</span>
          ) : (
            <span className="label success">{props.contact.type}</span>
          )}
        </div>
        <p>
          <button className="action-btn">Convert</button>
        </p>
      </div>
    </div>
  );
};

export default ProfileCard;
