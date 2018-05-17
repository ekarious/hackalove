import React, { Component } from "react";

import logo from "../images/logo_starwars.png";

const image = {
  width: "100%"
};

class Logo extends Component {
  render() {
    return (
      <div>
        <img style={image} src={logo} alt="" />
      </div>
    );
  }
}

export default Logo;
