import React, { Component } from "react";
import axios from "axios";
import ProfilDetail from "./ProfilDetail";
import ListePersonnes from "./ListePersonnes";

class Profil extends Component {
  state = {
    Personnes: []
  };

  render() {
    return (
      <div>
        <ProfilDetail />
      </div>
    );
  }
}

export default Profil;
