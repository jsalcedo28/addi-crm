import React, { useState, useEffect } from "react";
import MetricCard from "./MetricCard";

const MetricsRow = () => {
  let [metrics, setMetrics] = useState([]);

  useEffect(() => {
    fetch("/api/metrics")
      .then((res) => res.json())
      .then((json) => {
        setMetrics(json.metrics);
      });
  }, []);

  return (
    <div className="grid-container-3 animate-bottom">
      <MetricCard metrics={metrics} />
    </div>
  );
};

export default MetricsRow;
