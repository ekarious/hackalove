import React from "react";
import ProfilDetail from "../components/ProfilDetail";
import BoutonAnnuler from "../components/BoutonAnnuler";
import BoutonValider from "../components/BoutonValider";
import ProfilPourLaVie from "../components/ProfilPourLaVie";
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

const Profil = () => (
  <div style={background} className="Profil">
    <ProfilDetail />
    <ProfilPourLaVie />
  </div>
);

export default Profil;
