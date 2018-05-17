import React, { Component } from "react";
import { Button } from "reactstrap";
import { Container, Row, Col } from "reactstrap";
import {
  Form,
  FormGroup,
  Label,
  Input,
  FormFeedback,
  FormText
} from "reactstrap";
import "../components/LoginDetail.css";
import "../components/BoutonValider.js";

class LoginDetail extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value.toUpperCase() });
  }
  handleSubmit(event) {
    alert("Email was submitted" + this.state.value);
    event.preventDefault();
  }
  render() {
    return (
      <Container>
        <Row>
          <Form method="post" action="" onSubmit={this.handleSubmit}>
            <FormGroup>
              <Label for="Email">Email</Label>
              <Input
                type="email"
                value={this.state.value}
                onChange={this.handleChange}
              />
            </FormGroup>
            <FormGroup>
              <Label for="Password">Mot de passe</Label>
              <Input
                type="email"
                value={this.state.value}
                onChange={this.handleChange}
              />
            </FormGroup>
          </Form>
        </Row>
      </Container>
    );
  }
}

export default LoginDetail;
