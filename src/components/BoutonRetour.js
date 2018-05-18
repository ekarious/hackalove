import React, { Component } from "react";
import "../components/BoutonRetour.css";

class BoutonRetour extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <button className="bouton-retour" onClick={this.return}>
          <i className="fas fa-arrow-alt-circle-left" />
        </button>
      </div>
    );
  }
}

export default BoutonRetour;
