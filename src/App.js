import React, { Component } from "react";
import "./App.css";
import ListePersonnes from "./components/ListePersonnes";
import Profil from "./components/Profil";

class App extends Component {
  render() {
    return (
      <div>
        {/* <ListePersonnes /> */}
        <Profil />
      </div>
    );
  }
}

export default App;
