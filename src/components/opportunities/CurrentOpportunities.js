import React, { useState, useEffect } from "react";
import MetricsRow from "../common/MetricsRow";
import ProfileCardRow from "./ProfileCardsRow";
import axios from "axios";

const CurrentOpportunities = () => {
  let [contacts, setContacts] = useState([]);

  useEffect(() => {
    axios
      .get("/api/contacts")
      .then(function (response) {
        // handle success
        setContacts(response.data.contacts);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }, []);

  return (
    <>
      <MetricsRow />
      <div className="item">
        <h1>Current Opportunities</h1>
        <hr />
        <ProfileCardRow contacts={contacts} />
      </div>
    </>
  );
};

export default CurrentOpportunities;
