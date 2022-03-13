import React from "react";
import MetricsRow from "../common/MetricsRow";
import ProfileCardRow from "./ProfileCardsRow";

const contacts = [
  {
    firstName: "Eva",
    lastName: "Mendez",
    nationalID: "45125685496",
    birthdate: "1990-08-29",
    email: "evamendez@gmail.com",
    type: "Lead",
    imgUrl: "https://i.pravatar.cc/250?img=36",
    score: 15,
  },
  {
    firstName: "Maria",
    lastName: "Perez",
    nationalID: "45125685496",
    birthdate: "1990-08-29",
    email: "johndoe@gmail.com",
    type: "Lead",
    imgUrl: "https://i.pravatar.cc/250?img=26",
    score: 10,
  },
  {
    firstName: "Marcus",
    lastName: "Camby",
    nationalID: "45125685496",
    birthdate: "1990-08-29",
    email: "johndoe@gmail.com",
    type: "Lead",
    imgUrl: "https://i.pravatar.cc/250?img=14",
    score: 26,
  },
  {
    firstName: "Mara",
    lastName: "Doe",
    nationalID: "45125685496",
    birthdate: "1990-08-29",
    email: "johndoe@gmail.com",
    type: "Prospect",
    imgUrl: "https://i.pravatar.cc/250?img=37",
    score: 85,
  },
  {
    firstName: "Jimmy",
    lastName: "Mendez",
    nationalID: "45125685496",
    birthdate: "1990-08-29",
    email: "evamendez@gmail.com",
    type: "Lead",
    imgUrl: "https://i.pravatar.cc/250?img=12",
    score: 15,
  },
  {
    firstName: "John",
    lastName: "Doe",
    nationalID: "45125685496",
    birthdate: "1990-08-29",
    email: "johndoe@gmail.com",
    type: "Lead",
    imgUrl: "https://i.pravatar.cc/250?img=8",
    score: 11,
  },
  {
    firstName: "Mike",
    lastName: "Smith",
    nationalID: "45125685496",
    birthdate: "1990-08-29",
    email: "johndoe@gmail.com",
    type: "Lead",
    imgUrl: "https://i.pravatar.cc/250?img=6",
    score: 10,
  },
  {
    firstName: "John",
    lastName: "Marcus",
    nationalID: "45125685496",
    birthdate: "1990-08-29",
    email: "johndoe@gmail.com",
    type: "Prospect",
    imgUrl: "https://i.pravatar.cc/250?img=2",
    score: 90,
  },
];

const contactObjects = contacts.map((contact, i) => ({
  id: i,
  firstName: contact.firstName,
  lastName: contact.lastName,
  nationalID: contact.nationalID,
  birthdate: contact.birthdate,
  email: contact.email,
  type: contact.type,
  imgUrl: contact.imgUrl,
  score: contact.score,
}));

const CurrentOpportunities = () => {
  return (
    <>
      <MetricsRow />
      <div className="item">
        <h1>Current Opportunities</h1>
        <hr />
        <ProfileCardRow contacts={contactObjects} />
      </div>
    </>
  );
};

export default CurrentOpportunities;
