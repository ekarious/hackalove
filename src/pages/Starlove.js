import React from "react";
import Logo from "../components/LogoStarlove";
import hearts from "../images/starloveCoeurs.jpg";
import "./Starlove.css";

import PinkButton from "../components/PinkButton";

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

const Starlove = () => (
  <div style={background} className="Starlove">
    <Logo className="logo" />
    <div className="buttons">
      <PinkButton link="/login" text="Connexion" />
      <PinkButton link="/signup" text="Inscription" />
    </div>
  </div>
);

export default Starlove;
