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
    this.state = {
      username: "",
      password: ""
    };

    this.handleChangeUsername = this.handleChangeUsername.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
  }

  handleChangeUsername(event) {
    this.setState({ username: event.target.value });
  }

  handleChangePassword(event) {
    this.setState({ password: event.target.value });
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
                className="input"
                type="email"
                value={this.state.username}
                onChange={this.handleChangeUsername}
              />
            </FormGroup>
            <FormGroup>
              <Label for="Password">Mot de passe</Label>
              <Input
                className="input"
                type="password"
                value={this.state.password}
                onChange={this.handleChangePassword}
              />
            </FormGroup>
          </Form>
        </Row>
      </Container>
    );
  }
}

export default LoginDetail;
