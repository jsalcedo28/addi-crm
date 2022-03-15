import React from "react";

const MetricCard = (props) => {
  return (
    <>
      {props.metrics.map((metric, i) => (
        <div key={i}>
          <h1>{metric.count}</h1>
          <span>{metric.title}</span>
        </div>
      ))}
    </>
  );
};

export default MetricCard;
