import React from "react";

const MetricCard = (props) => {
  return (
    <>
      {props.metrics.map((metric) => (
        <div key={metric.id}>
          <h1>{metric.count}</h1>
          <span>{metric.title}</span>
        </div>
      ))}
    </>
  );
};

export default MetricCard;
