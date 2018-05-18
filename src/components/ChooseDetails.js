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

class ChooseDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Personne: { id: 25 }
    };
  }
  componentDidMount() {
    axios
      .get(
        `https://cdn.rawgit.com/akabab/starwars-api/0.2.1/api/id/${
          this.state.Personne.id
        }.json`
      )
      .then(res => {
        const Personne = res.data;
        console.log(res.data);
        this.setState({ Personne });
      });
  }
  render() {
    return (
      <div className="suggestioncard">
        <h5>Veux-tu être mon stormtrompeur?</h5>
        <CardGroup>
          <Card>
            <CardImg
              top
              width="100%"
              src={this.state.Personne.image}
              alt={this.state.Personne.name}
            />
            <CardBody>
              <CardTitle>{this.state.Personne.name}</CardTitle>
              <CardSubtitle>{this.state.Personne.gender}</CardSubtitle>
            </CardBody>
          </Card>
        </CardGroup>
      </div>
    );
  }
}

export default ChooseDetails;
