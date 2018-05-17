import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./PinkButton.css";

class PinkButton extends Component {
  render() {
    return (
      <div>
        <Link className="pink" to={this.props.link}>
          {this.props.text}
        </Link>
      </div>
    );
  }
}

export default PinkButton;
