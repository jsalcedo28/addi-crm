import React from "react";

const InfoSection = (props) => {
  return (
    <div className="intro">
      <h1>{props.title}</h1>
      <p>{props.description}</p>
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
