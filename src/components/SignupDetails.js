import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";

import "../components/SignupDetails.css";

class SignupDetails extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }
  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  render() {
    return (
      <Form>
        <h2>Créer un compte</h2>
        {/* Ton apparence */}
        <h4>Ton apparence</h4>
        {/* nom */}
        <FormGroup>
          <Label for="exampleEmail">Nom:</Label>
          <Input type="email" name="email" id="exampleEmail" placeholder="" />
        </FormGroup>
        {/* genre */}
        <FormGroup>
          <Label for="exampleSelect">Genre:</Label>
          <Input type="select" name="select" id="exampleSelect">
            <option>Human</option>
            <option>Droïd</option>
            <option>Wookie</option>
            <option>dug</option>
            <option>pau'an</option>
            <option>umbaran</option>
            <option>kaleesh</option>
            <option>togruta</option>
            <option>muun</option>
            <option>skakoan</option>
            <option>kaninoam</option>
            <option>besalisk</option>
            <option>clawdit</option>
            <option>mirialan</option>
            <option>geonosian</option>
            <option>chagrian</option>
            <option>kel dor</option>
          </Input>
        </FormGroup>
        <FormGroup>
          <Label for="exampleSelectMulti">Select Multiple</Label>
          <Input
            type="select"
            name="selectMulti"
            id="exampleSelectMulti"
            multiple
          >
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </Input>
        </FormGroup>
        <FormGroup>
          <Label for="exampleText">Text Area</Label>
          <Input type="textarea" name="text" id="exampleText" />
        </FormGroup>
        <FormGroup>
          <Label for="exampleFile">File</Label>
          <Input type="file" name="file" id="exampleFile" />
          <FormText color="muted">
            This is some placeholder block-level help text for the above input.
            It's a bit lighter and easily wraps to a new line.
          </FormText>
        </FormGroup>
        <FormGroup tag="fieldset">
          <legend>Radio Buttons</legend>
          <FormGroup check>
            <Label check>
              <Input type="radio" name="radio1" /> Option one is this and
              that—be sure to include why it's great
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input type="radio" name="radio1" /> Option two can be something
              else and selecting it will deselect option one
            </Label>
          </FormGroup>
          <FormGroup check disabled>
            <Label check>
              <Input type="radio" name="radio1" disabled /> Option three is
              disabled
            </Label>
          </FormGroup>
        </FormGroup>
        <FormGroup check>
          <Label check>
            <Input type="checkbox" /> Check me out
          </Label>
        </FormGroup>
        {/* email nom password */}
        <h4>Tes identifiants</h4>
        <FormGroup>
          <Label for="exampleEmail">Email</Label>
          <Input type="email" name="email" id="exampleEmail" placeholder="@" />
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword">Password</Label>
          <Input
            type="password"
            name="password"
            id="examplePassword"
            placeholder=""
          />
        </FormGroup>
        <Button>Submit</Button>
      </Form>
    );
  }
}

export default SignupDetails;
