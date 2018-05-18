import React, { Component } from "react";
import "../sabreLaser.css";

class SabreLaser extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <div class="custom-checkbox lightsaber demo1">
          <input
            type="checkbox"
            id="sword1"
            class="sound"
            onchange="myfunction();"
          />
          <label for="sword1" />
          <div class="plasma yoda" />
        </div>
        <div class="custom-checkbox lightsaber demo3">
          <input
            type="checkbox"
            id="sword3"
            class="sound"
            onchange="myfunction();"
          />
          <label for="sword3" />
          <div class="plasma windu" />
        </div>
      </div>
    );
  }
}

export default SabreLaser;
