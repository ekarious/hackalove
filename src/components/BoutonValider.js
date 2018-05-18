import React, { Component } from "react";
import "../components/BoutonValider.css";
import { Link } from "react-router-dom";

class BoutonValider extends Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.valider = this.valider.bind(this);
  }

  valider() {
    console.log("tada");
  }

  render() {
    return (
      <div className="bouton-valider">
        <Link to="/filters" onClick={() => this.valider()}>
          <i className="fas fa-check-circle" />
        </Link>
      </div>
    );
  }
}

export default BoutonValider;
