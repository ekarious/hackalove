import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import ListePersonnes from "./components/ListePersonnes";
import BoutonValider from "./components/BoutonValider";
import BoutonAnnuler from "./components/BoutonAnnuler";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <BoutonValider /> <BoutonAnnuler />
        <ListePersonnes />
      </div>
    );
  }
}

export default App;
