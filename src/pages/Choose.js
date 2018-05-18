import React from "react";
import ChooseDetails from "../components/ChooseDetails";
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

const Choose = () => (
  <div style={background} className="Profil">
    <h2>Choose</h2>
    <ChooseDetails />
  </div>
);

export default Choose;
