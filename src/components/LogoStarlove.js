import React, { Component } from "react";

import logo from "../images/logo_starloves.png";

const image = {
  width: "100%"
};

class LogoStarlove extends Component {
  render() {
    return (
      <div>
        <img style={image} src={logo} alt="" />
      </div>
    );
  }
}

export default LogoStarlove;
