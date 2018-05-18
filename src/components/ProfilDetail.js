import React, { Component } from "react";
import { Table, Container, Row, Col } from "reactstrap";
import axios from "axios";
import SabreLaser from "./SabreLaser";
import "../profilDetail.css";
import choix from "../choix";

class ProfilDetail extends Component {
  constructor(props) {
    super(props);
    this.state = { Personne: { id: 25 } };
  }

  componentDidMount() {
    axios
      .get(
        `https://cdn.rawgit.com/akabab/starwars-api/0.2.1/api/id/${
          choix.value.id
        }.json`
      )
      .then(res => {
        const Personne = res.data;
        console.log(res.data);
        this.setState({ Personne });
      });
  }

  render() {
    const orientation = Math.floor(Math.random() * Math.floor(2));
    let orientationString = "";
    if (orientation === 1) {
      orientationString = "Hétéro";
    } else {
      orientationString = "Homo";
    }
    const prenom = [
      "Hakim",
      "Emilia",
      "Tommy",
      "Samir",
      "Anthony",
      "BenJo",
      "Vinz",
      "Martin",
      "Marjorie",
      "Sylvain",
      "Julien",
      "Laetitia",
      "Edouard Metz"
    ];
    const fun = [
      "a déjà codé en javascript cul nu avec ",
      "a fait un rm -rf sur l'ordinateur de ",
      "a reniflé le Bootstrap de ",
      "a vomi sous la table de ",
      "est resté coincé dans les toilettes des PHP avec ",
      "a trouvé le WILD CIRCUS de Samir moins bien que celui de "
    ];
    const bffRandom = Math.floor(Math.random() * Math.floor(prenom.length));
    const prenomRandom = Math.floor(Math.random() * Math.floor(prenom.length));
    const funRandom = Math.floor(Math.random() * Math.floor(fun.length));
    const imageLargeur = window.innerWidth * 2 / 3;

    return (
      <div>
        <div>
          <SabreLaser width={imageLargeur} />
        </div>
        <div className="text-center">
          <img
            className="bordurePhoto"
            src={this.state.Personne.image}
            alt={this.state.Personne.name}
            width={imageLargeur}
          />
        </div>
        <div className="text-center">
          <h1>{this.state.Personne.name}</h1>
          <h3 className="monPetitPlus">
            {" "}
            Mon petit plus : {this.state.Personne.name} {fun[funRandom]}
            {prenom[prenomRandom]}
          </h3>
        </div>
        <Table dark>
          <tr>
            <th colspan="2" className="text-center h3">
              A propos de moi
            </th>
          </tr>
          <tr>
            <td>BFF : {prenom[bffRandom]}</td>
            <td>Genre : {this.state.Personne.gender}</td>
          </tr>
          <tr>
            <td>Espèce : {this.state.Personne.species}</td>
            <td>
              Couleur de la peau :{" "}
              {this.state.Personne.skinColor
                ? this.state.Personne.skinColor
                : "Surprise !"}
            </td>
          </tr>
          <tr>
            <td>
              Couleur des cheveux :{" "}
              {this.state.Personne.hairColor
                ? this.state.Personne.hairColor
                : "Chauve comme un oeuf"}
            </td>
            <td>Couleur des yeux : {this.state.Personne.eyeColor}</td>
          </tr>
          <tr>
            <td>Taille : {this.state.Personne.height} m</td>
            <td>Poids : {this.state.Personne.mass} Kg</td>
          </tr>
          <tr>
            <td>Planète d'origine : {this.state.Personne.homeworld}</td>
            <td>Orientation : {orientationString}</td>
          </tr>
          <tr />
          <tr>
            <td colspan="2">
              Affiliation principale :{" "}
              {this.state.Personne.affiliations
                ? this.state.Personne.affiliations[0]
                : "Pas d'affiliation"}
            </td>
          </tr>
        </Table>
      </div>
    );
  }
}

export default ProfilDetail;
