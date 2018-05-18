import React, { Component } from "react";
import ButtonUnique from "./ButtonUnique";
import vinz from "../images/choubaka_vinz.jpg";

class ProfilPourLaVie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalAmour: "none"
    };
    this.visibleAmour = this.visibleAmour.bind(this);
    this.unvisibleAmour = this.unvisibleAmour.bind(this);
  }

  visibleAmour() {
    this.setState({
      modalAmour: "initial"
    });
  }

  unvisibleAmour() {
    this.setState({
      modalAmour: "none"
    });
  }

  render() {
    const style = {
      display: this.state.modalAmour,
      position: "fixed",
      "z-index": 2000,
      top: "10vh",
      left: "10vw",
      width: "80vw",
      "background-color": "pink",
      "font-weight": "bolder",
      "font-size": "1.8em",
      color: "blue"
    };
    const styleFlex = {
      display: "flex",
      "justify-content": "center",
      "align-self": "center"
    };
    const styleButtons = {
      display: "flex",
      "justify-content": "space-around",
      "align-items": "center",
      "margin-bottom": "20px"
    };
    const styleButtonUnique = {
      margin: "0 0 0 0",
      padding: "0 0 0 0"
    };
    const styleButtonUniqueChangeAvis = {
      margin: "20px 0 0 0",
      padding: "0 0 0 0",
      "font-size": "10px !important",
      border: "2px solid red"
    };
    return (
      <div>
        <div style={styleButtons}>
          <ButtonUnique
            color="red"
            link="/Filters"
            action={this.visibleAmour}
            text={<i className="fas fa-times-circle" />}
            style={styleButtonUnique}
          />
          <ButtonUnique
            color="green"
            link="/profil#"
            action={this.visibleAmour}
            text={<i className="fas fa-check-circle" />}
            style={styleButtonUnique}
          />
        </div>
        <div style={style}>
          <p>Vous êtes désormais unis pour la vie !</p>
          <div style={styleFlex}>
            <img
              src={vinz}
              alt="Amour pour toujours"
              width="100%"
              height="100%"
            />
          </div>
          <div style={styleFlex}>
            <ButtonUnique
              color="red2"
              link="/profil#"
              action={this.unvisibleAmour}
              text={<p>Je change d'avis</p>}
              style={styleButtonUniqueChangeAvis}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default ProfilPourLaVie;
