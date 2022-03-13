import React from "react";
import MetricCard from "./MetricCard";

const metrics = [
  {
    title: "Contacts",
    count: 12,
  },
  {
    title: "Leads",
    count: 10,
  },
  {
    title: "Prospects",
    count: 2,
  },
];

const metricObjects = metrics.map((metric, i) => ({
  id: i,
  title: metric.title,
  count: metric.count,
}));

const MetricsRow = () => {
  return (
    <div className="grid-container-3">
      <MetricCard metrics={metricObjects} />
    </div>
  );
};

export default MetricsRow;
