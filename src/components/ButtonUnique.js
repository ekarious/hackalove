import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./ButtonUnique.css";

class ButtonUnique extends Component {
  render() {
    return (
      <div className="button">
        <Link
          className={this.props.color}
          to={this.props.link}
          onClick={this.props.action}
        >
          {this.props.text ? this.props.text : ""}
        </Link>
      </div>
    );
  }
}

export default ButtonUnique;
