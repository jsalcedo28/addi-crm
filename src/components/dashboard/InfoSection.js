import React from "react";

const InfoSection = ({ title, description }) => {
  return (
    <div className="intro animate-bottom">
      <h1>{title}</h1>
      <p>{description}</p>
      <div className="action">
        <a
          href="https://github.com/jsalcedo28/addi-crm"
          title="View, Fork or Star on GitHub"
          rel="noreferrer"
          className="btn github"
          target="_blank"
        >
          View on GitHub
        </a>
      </div>
    </div>
  );
};

export default InfoSection;
