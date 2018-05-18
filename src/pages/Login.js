import React from "react";
import Logo from "../components/LogoStarlove";
import hearts from "../images/starloveCoeurs.jpg";
import LoginDetail from "../components/LoginDetail";
import BoutonValider from "../components/BoutonValider";

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

const Login = () => (
  <div style={background} className="Login">
    <Logo className="logo" />
    <LoginDetail />
    <BoutonValider />
  </div>
);

export default Login;
