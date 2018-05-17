import React, { Component } from "react";
import "../components/BoutonValider.css";

class BoutonValider extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <button className="bouton-valider" onClick={this.yes}>
          <i class="fas fa-check-circle" />
        </button>
      </div>
    );
  }
}

export default BoutonValider;
