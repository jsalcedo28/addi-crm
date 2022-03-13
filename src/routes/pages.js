import React from "react";
import Dashboard from "../components/dashboard/Dashboard";
import CurrentOpportunities from "../components/opportunities/CurrentOpportunities";

export function Home() {
  return (
    <>
      <Dashboard />
    </>
  );
}

export function Opportunities() {
  return (
    <>
      <CurrentOpportunities />
    </>
  );
}

export function PageNotFound() {
  return (
    <>
      <h1>404 Error: Page Not Found</h1>
    </>
  );
}
