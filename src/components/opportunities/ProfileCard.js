import React, { useState } from "react";
import Loader from "../common/Loader";
import axios from "axios";

const ProfileCard = ({ contact }) => {
  let [type, setType] = useState(contact.type);
  let [score, setScore] = useState(contact.score);
  let [isValidated, setIsValidated] = useState(false);
  let [isLoadingValidate, setIsLoadingValidate] = useState(false);
  let [isLoadingConvert, setIsLoadingConvert] = useState(false);
  let [isOnNationalRegistry, setIsOnNationalRegistry] = useState(false);
  let [hasCleanRecord, setHasCleanRecord] = useState(false);
  let [hasGoodScore, setHasGoodScore] = useState(false);

  const getScore = (nationalID) => {
    axios
      .get(`/api/score/${nationalID}`)
      .then(function (response) {
        // handle success
        const newScore = response.data;
        setScore(newScore);

        if (newScore > 60) {
          setType("Prospect");
          setHasGoodScore(true);
        }
        setIsLoadingConvert(false);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  };

  const validate = async (nationalID) => {
    setIsLoadingValidate(true);

    //simultaneous requests with Axios
    axios
      .all([
        axios.get(`/api/registry/${nationalID}`),
        axios.get(`/api/judicial/${nationalID}`),
      ])
      .then(
        axios.spread((nationalData, judicialData) => {
          // output of req.
          const nationalRecord = nationalData.data.nationalRecords[0];
          const judicialRecord = judicialData.data.judicialRecords[0];

          //validating that exist and match the national registry
          if (
            nationalRecord.isMatchInRegistry &&
            nationalRecord.isOnNationalRegistry
          ) {
            setIsOnNationalRegistry(true);
          }

          //validating that has a clean record
          if (!judicialRecord.hasRecords) {
            setHasCleanRecord(true);
          }

          //Set isValidated if user exist in national registry and has no criminal records
          if (
            nationalRecord.isMatchInRegistry &&
            nationalRecord.isOnNationalRegistry &&
            !judicialRecord.hasRecords
          ) {
            setIsValidated(true);
          }

          setIsLoadingValidate(false);
        })
      );
  };

  const convert = (nationalID) => {
    setIsLoadingConvert(true);

    //getting satisfaction score
    getScore(nationalID);
  };

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
          <span
            className={
              type === "Lead" && score < 60 ? "label info" : "label success"
            }
          >
            {type}
          </span>
        </div>
        <div className="validation-section">
          <p>
            <i
              className={
                isOnNationalRegistry
                  ? "fa fa-check-circle-o green-color"
                  : type === "Prospect"
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
                  : type === "Prospect"
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
                  : type === "Prospect"
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
