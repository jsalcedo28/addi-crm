import React from "react";
import MetricsRow from "../common/MetricsRow";
import InfoSection from "./InfoSection";

const title = "Technical Challenge: Addi CRM";
const description =
  "A custom-made CRM that our sales agents use on a daily basis. That system is basically a sales pipeline where leads could convert into prospects for our company. In order to convert them into prospects, our sales agents need to run some manual checks to validate that the person is eligible to be a prospect of our company.";

const Dashboard = () => {
  return (
    <>
      <MetricsRow />
      <InfoSection title={title} description={description} />
    </>
  );
};

export default Dashboard;
