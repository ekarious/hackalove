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

class ChooseDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Personnes: [],
      selectionFinal: 0
    };
  }

  render() {
    let indexRace = this.state.selectionFinal;

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
      </div>
    );
  }
}

export default ChooseDetails;
