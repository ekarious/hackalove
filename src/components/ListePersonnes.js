import React, { Component } from "react";
import axios from "axios";

class ListePersonnes extends Component {
  state = {
    Personnes: []
  };

  componentDidMount() {
    axios
      .get("https://cdn.rawgit.com/akabab/starwars-api/0.2.1/api/all.json")
      .then(res => {
        const Personnes = res.data;
        console.log(res.data);
        this.setState({ Personnes });
      });
  }

  render() {
    return (
      <div>
        <ul>{this.state.Personnes.map(person => <li>{person.name}</li>)}</ul>
      </div>
    );
  }
}

export default ListePersonnes;
