import React, { useState, useEffect } from "react";
import MetricsRow from "../common/MetricsRow";
import ProfileCardRow from "./ProfileCardsRow";

const CurrentOpportunities = () => {
  let [contacts, setContacts] = useState([]);

  useEffect(() => {
    fetch("/api/contacts")
      .then((res) => res.json())
      .then((json) => {
        setContacts(json.contacts);
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
