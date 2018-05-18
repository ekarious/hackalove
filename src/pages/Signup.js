import React from "react";
import Logo from "../components/LogoStarlove";
import hearts from "../images/starloveCoeurs.jpg";
import SignupDetails from "../components/SignupDetails";
import "./Signup.css";

const background = {
  backgroundColor: "#000000",
  background: "url(" + hearts + ")",
  backgroundRepeat: "repeat-y",
  backgroundSize: "contain",
  height: "100%",
  display: "flex",
  flexFlow: "column nowrap",
  justifyContent: "space-between",
  alignItems: "center"
};

const Signup = () => (
  <div style={background} className="Signup">
    <Logo className="logo" />
    <h2>Créer un compte</h2>
    <SignupDetails className="details" />
  </div>
);

export default Signup;
