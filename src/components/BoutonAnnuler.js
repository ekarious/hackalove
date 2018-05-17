import React, { Component } from "react";
import "../components/BoutonAnnuler.css";

class BoutonAnnuler extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <button className="bouton-annuler" onClick={this.no}>
          <i class="fas fa-times-circle" />
        </button>
      </div>
    );
  }
}

export default BoutonAnnuler;
