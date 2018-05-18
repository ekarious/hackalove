import React, { Component } from "react";

import logo from "../images/logo_chewie.png";

const image = {
  width: "100%"
};

class LogoChewie extends Component {
  render() {
    return (
      <div>
        <img style={image} src={logo} alt="" />
      </div>
    );
  }
}

export default LogoChewie;
