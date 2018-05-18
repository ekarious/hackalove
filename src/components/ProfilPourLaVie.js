import React, { Component } from "react";
import ButtonUnique from "./ButtonUnique";

class ProfilPourLaVie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalAmour: "none"
    };
    this.visibleAmour = this.visibleAmour.bind(this);
  }

  visibleAmour() {
    this.setState({
      modalAmour: "initial"
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
      height: "80vh",
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
    return (
      <div>
        <div style={styleButtons}>
          <ButtonUnique
            color="red"
            link="/profil#"
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
              src="http://via.placeholder.com/250x350"
              alt="Amour pour toujours"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default ProfilPourLaVie;
