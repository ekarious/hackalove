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
    <h4>Reglement principal du test</h4>
    <div className="rules">
      <p>
        1. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas beatae
        omnis est eos corrupti dolor eveniet recusandae sed harum velit in
        laboriosam cupiditate placeat.
      </p>
      <p>
        2. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro
        tempora saepe repellat rerum minima, eius delectus nesciunt modi!
        Commodi asperiores perspiciatis.
      </p>
      <p>
        3. Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat odio
        quibusdam ipsum fugit itaque ullam reiciendis doloremque eos sequi
        ducimus possimus eveniet.
      </p>
    </div>
    <FacadeButton link="/starlove" text="Devenir Storm Trooper" />
  </div>
);

export default Facade;
