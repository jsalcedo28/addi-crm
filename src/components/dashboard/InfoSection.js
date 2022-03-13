import React from "react";

const InfoSection = (props) => {
  return (
    <div class="intro">
      <h1>{props.title}</h1>
      <p>{props.description}</p>
      <div class="action">
        <a
          href="https://github.com/jsalcedo28"
          title="View, Fork or Star on GitHub"
          rel="noreferrer"
          class="btn github"
          target="_blank"
        >
          View on GitHub
        </a>
      </div>
    </div>
  );
};

export default InfoSection;
