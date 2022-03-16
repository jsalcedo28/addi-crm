import React, { useState, useEffect } from "react";
import Loader from "../common/Loader";

const ProfileCard = ({ contact }) => {
  let [type, setType] = useState(contact.type);
  let [score, setScore] = useState(0);
  let [isValidated, setIsValidated] = useState(false);
  let [isLoadingValidate, setIsLoadingValidate] = useState(false);
  let [isLoadingConvert, setIsLoadingConvert] = useState(false);
  let [isOnNationalRegistry, setIsOnNationalRegistry] = useState(false);
  let [hasCleanRecord, setHasCleanRecord] = useState(false);
  let [hasGoodScore, setHasGoodScore] = useState(false);

  // useEffect(() => {
  //   fetch(`/api/judicial/${contact.nationalID}`)
  //     .then((res) => res.json())
  //     .then((json) => {
  //       console.log(json.judicialRecords);
  //     });
  // }, []);

  const getScore = () => {
    console.log("getscore1");
    try {
      console.log("getscore");
      fetch("/api/score")
        .then((res) => res.json())
        .then((json) => {
          console.log(json.score);
          return json.score;
        });
    } catch (error) {
      console.log(error);
    }
  };

  const validate = async (nationalID) => {
    setIsLoadingValidate(true);
    setTimeout(() => {
      setIsValidated(true);
      setIsLoadingValidate(false);
      setIsOnNationalRegistry(true);
      setHasCleanRecord(true);
    }, 2000);
  };

  const convert = (nationalID) => {
    setIsLoadingConvert(true);
    setTimeout(() => {
      console.log(nationalID);
      console.log(type);
      console.log(score);

      const userScore = getScore();
      setScore(userScore);

      console.log("score", score);

      setType("Prospect");
      setHasGoodScore(true);

      setIsLoadingConvert(false);
    }, 2000);
  };

  // const convertContact = (id) => {
  //   fetch(`/api/notes/${id}`)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setNote(data.notes);
  //       setToggle(true);
  //     })
  //     .catch((error) => console.log('Note not found', error));
  // };

  return (
    <div className="column">
      <div className="card">
        <img
          src={contact.imgUrl}
          alt={contact.firstName}
          style={{ width: "100%" }}
        />
        <h1>
          {contact.firstName} {contact.lastName}
        </h1>
        <p className="title">
          <i className="fa fa-address-card-o"></i> {contact.nationalID}
        </p>
        <p>
          <i className="fa fa-envelope"></i> {contact.email}
        </p>
        <p>
          <i className="fa fa-birthday-cake"></i> {contact.birthdate}
        </p>
        <div className="tags-section">
          <span className="label other">{score} Score</span>
          {type === "Lead" ? (
            <span className="label info">{type}</span>
          ) : (
            <span className="label success">{type}</span>
          )}
        </div>
        <div className="validation-section">
          <p>
            <i
              className={
                isOnNationalRegistry
                  ? "fa fa-check-circle-o green-color"
                  : "fa fa-close red-color"
              }
            ></i>{" "}
            National Registry
          </p>
          <p>
            <i
              className={
                hasCleanRecord
                  ? "fa fa-check-circle-o green-color"
                  : "fa fa-close red-color"
              }
            ></i>{" "}
            Judicial Records
          </p>
          <p>
            <i
              className={
                hasGoodScore
                  ? "fa fa-check-circle-o green-color"
                  : "fa fa-close red-color"
              }
            ></i>{" "}
            Good Score
          </p>
        </div>
        <div>
          <button
            className={
              !isValidated
                ? type === "Prospect"
                  ? "disabled-btn"
                  : "validate-btn action-btn"
                : "disabled-btn"
            }
            disabled={
              !isValidated
                ? type === "Prospect"
                  ? "disabled"
                  : false
                : "disabled"
            }
            onClick={() => validate(contact.nationalID)}
          >
            {isLoadingValidate ? <Loader /> : "Validate"}
          </button>
          <button
            className={
              isValidated
                ? type === "Prospect"
                  ? "disabled-btn"
                  : "action-btn"
                : "disabled-btn"
            }
            disabled={
              isValidated
                ? type === "Prospect"
                  ? "disabled"
                  : false
                : "disabled"
            }
            onClick={() => convert(contact.nationalID)}
          >
            {isLoadingConvert ? <Loader /> : "Convert"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
