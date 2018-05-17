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
  }

  render() {
    return (
      <Container>
        <Row>
          <Col md={{ size: 6, offset: 2 }} />
          <Form method="post" action="" onSubmit={this.handleSubmit}>
            <FormGroup>
              <Label for="exampleEmail">Valid input</Label>
              <Input valid />
              <FormFeedback valid>Sweet! that name is available</FormFeedback>
              <FormText>Example help text that remains unchanged.</FormText>
            </FormGroup>
            <FormGroup>
              <Label for="examplePassword">Invalid input</Label>
              <Input invalid />
              <FormFeedback>Oh noes! that name is already taken</FormFeedback>
              <FormText>Example help text that remains unchanged.</FormText>
            </FormGroup>
          </Form>
        </Row>
      </Container>
    );
  }
}

export default LoginDetail;
