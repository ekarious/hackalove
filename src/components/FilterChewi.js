import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";
import logo from "../images/logo_chewie.png";
import axios from "axios";
import { Link } from "react-router-dom";
import "./chewiDream.css";

const image = {
  width: "100%"
};

class FilterChewi extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Personnes: []
    };
  }

  componentWillMount() {
    axios
      .get(`https://cdn.rawgit.com/akabab/starwars-api/0.2.1/api/all.json`)
      .then(res => {
        const Personnes = res.data;
        this.setState({ Personnes });
      });
  }

  render() {
    const speciseList = this.state.Personnes.map(person => person.species);
    const personnes = Array.from(new Set(speciseList));
    const characters = personnes.map(el => <option>{el.toUpperCase()}</option>);

    const genre = this.state.Personnes.map(person => person.gender);
    const trieGenre = Array.from(new Set(genre));
    const genreList = trieGenre.map(el => (
      <aria-label>{el.toUpperCase()}</aria-label>
    ));

    return (
      <div>
        <ul />
        <img src={logo} style={image} />
        <div class="card">
          <div class="card-header cardBg">
            <h1>Que chercher vous dans la galaxie ?</h1>
          </div>
          <div class="card-body">
            <Form>
              <FormGroup>
                <Label for="SelectEspece">
                  <h5>L'espèce de votre futur moitier</h5>
                </Label>
                <Input
                  type="select"
                  name="selectEspece"
                  id="SelectEspece"
                  class="form-control"
                >
                  {characters}
                </Input>
              </FormGroup>
              <FormGroup>
                <Label for="genre">
                  <h5>Je recherche :</h5>
                </Label>
                <FormGroup check>
                  <Label check>
                    <Input type="radio" name="radio1" required="required" />{" "}
                    {genreList[0]}
                  </Label>
                </FormGroup>
                <FormGroup check>
                  <Label check>
                    <Input type="radio" name="radio1" required="required" />{" "}
                    {genreList[1]}
                  </Label>
                </FormGroup>
              </FormGroup>

              <Link to="/choose">Lancer la recherche</Link>
            </Form>
          </div>
        </div>
      </div>
    );
  }
}

export default FilterChewi;
