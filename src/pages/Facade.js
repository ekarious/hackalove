import React from "react";
import Logo from "../components/Logo";
import space from "../images/facadeSpace.jpg";
import FacadeButton from "../components/FacadeButton";
import "./Facade.css";

const background = {
  backgroundColor: "#000000",
  background: "url(" + space + ")",
  backgroundSize: "cover",
  height: "100vh",
  width: "100%",
  display: "flex",
  flexFlow: "column nowrap",
  justifyContent: "space-between",
  alignItems: "center"
};

const Facade = () => (
  <div style={background} className="Facade">
    <Logo />
    <h6>Au service de l'Empire</h6>
    <div className="rules">
      <p>
        1. Les Stormtroopers sont l'élite des soldats à travers la galaxie sous
        les ordres directs de Dark Vador. Ils sont le symbole le plus
        caractéristique du nouvel Ordre.
      </p>
      <p>
        2. Les cadets impériaux reçoivent un endoctrinement intensif aux idéaux
        de l'Empire. Chaque soldat est totalement préparé à donner sans
        hésitation sa vie au service de l'Empire.
      </p>
      <p>
        3. Des simulations grandeur nature ont lieu afin de tester la qualité
        des nouvelles recrues. Les futurs stormtroopers voient souvent leur
        camarades mourir sous leurs yeux, mais ils ne doivent nullement les
        aider et accomplir l'ordre qui leur a été donné.
      </p>
    </div>
    <FacadeButton link="/starlove" text="Devenir Storm Trooper" />
  </div>
);

export default Facade;
