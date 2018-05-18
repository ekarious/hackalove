import React from "react";
import FilterChewi from "../components/FilterChewi";
import hearts from "../images/starloveCoeurs.jpg";

const background = {
  backgroundColor: "#000000",
  background: "url(" + hearts + ")",
  backgroundSize: "cover",
  height: "100vh",
  display: "flex",
  flexFlow: "column nowrap",
  justifyContent: "space-between",
  alignItems: "center"
};

const Filters = () => (
  <div style={background} className="Filters">
    <FilterChewi />
  </div>
);

export default Filters;
