import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./FacadeButton.css";

class FacadeButton extends Component {
  render() {
    return (
      <div className="button">
        <Link className="yellow" to={this.props.link}>
          {this.props.text}
        </Link>
      </div>
    );
  }
}

export default FacadeButton;
