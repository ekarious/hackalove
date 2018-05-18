import React, { Component } from "react";
import axios from "axios";
import "../components/ChooseDetails.css";
import {
  Card,
  Button,
  CardImg,
  CardTitle,
  CardText,
  CardGroup,
  CardSubtitle,
  CardBody
} from "reactstrap";
import store from "../store";
import choix from "../choix";
import ButtonUnique from "./ButtonUnique";

class ChooseDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Personnes: [],
      selectionFinal: 0
    };
    this.valider = this.valider.bind(this);
    this.refuser = this.refuser.bind(this);
  }

  valider() {
    choix.value = store.value[this.state.selectionFinal];
  }

  refuser() {
    this.setState({
      selectionFinal: this.state.selectionFinal + 1
    });
  }

  render() {
    let indexRace = 0;
    if (this.state.selectionFinal < store.value.length) {
      indexRace = this.state.selectionFinal;
    } else {
      this.setState({
        selectionFinal: 0
      });
    }
    const styleButtons = {
      display: "flex",
      "justify-content": "space-around",
      "align-items": "center",
      "margin-bottom": "20px"
    };
    console.log("=========$$$$$$$$$===========================");
    console.log(store);
    console.log("====================================");
    return (
      <div className="suggestioncard">
        <h5>Veux-tu être mon storm-trompeur?</h5>
        <CardGroup>
          <Card>
            <CardImg top width="100%" src={store.value[indexRace].image} />
            <CardBody>
              <CardTitle>{store.value[indexRace].name}</CardTitle>
              <CardSubtitle>{store.value[indexRace].gender}</CardSubtitle>
            </CardBody>
          </Card>
        </CardGroup>
        <div style={styleButtons}>
          <ButtonUnique
            color="red"
            link="/Choose#"
            action={() => this.refuser()}
            text={<i className="fas fa-times-circle" />}
            style=""
          />
          <ButtonUnique
            color="green"
            link="/profil#"
            action={() => this.valider()}
            text={<i className="fas fa-check-circle" />}
            style=""
          />
        </div>
      </div>
    );
  }
}

export default ChooseDetails;
