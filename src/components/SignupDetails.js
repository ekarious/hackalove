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
      <div id="fomulaire">
        <Form>
          <h2>Créer un compte</h2>
          {/* Ton apparence */}
          <h4>Ton apparence</h4>
          {/* nom */}
          <FormGroup>
            <Label for="nom">Nom:</Label>
            <Input type="name" name="name" id="nom" placeholder="" />
          </FormGroup>
          {/* planete */}
          <FormGroup>
            <Label for="planete">Planète:</Label>
            <Input type="planete" name="planete" id="planete" placeholder="" />
          </FormGroup>
          {/* gender */}

          <Label for="genre">Genre:</Label>
          <FormGroup check>
            <Label check>
              <Input type="radio" name="radio1" /> female
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input type="radio" name="radio1" /> male
            </Label>
          </FormGroup>

          {/* yeux */}
          <FormGroup>
            <Label for="yeux">Yeux:</Label>
            <Input type="select" name="select" id="yeux">
              <option>green</option>
              <option>blue</option>
              <option>red</option>
              <option>black</option>
              <option>gold</option>
              <option>pink</option>
              <option>strabisme convergent</option>
            </Input>
          </FormGroup>
          {/* cheveux */}
          <FormGroup>
            <Label for="exampleSelect">Cheveux:</Label>
            <Input type="select" name="select" id="exampleSelect">
              <option>brun</option>
              <option>blond</option>
              <option>roux</option>
              <option>coupe Mulet</option>
              <option>chauve</option>
            </Input>
          </FormGroup>
          {/* espèce: */}
          <FormGroup>
            <Label for="exampleSelect">Espèces:</Label>
            <Input type="select" name="select" id="exampleSelect">
              <option>Human</option>
              <option>Javascripter</option>
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
          {/* affiliations */}
          <FormGroup tag="fieldset">
            <Label for="exampleSelect">Affiliations:</Label>
            <FormGroup check>
              <Label check>
                <Input type="checkbox" name="radio1" /> Alliance to Restore the
                Republic
              </Label>
            </FormGroup>
            <FormGroup check>
              <Label check>
                <Input type="checkbox" name="radio1" /> Red Squadron
              </Label>
            </FormGroup>
            <FormGroup check>
              <Label check>
                <Input type="checkbox" name="radio1" /> Rogue Squadron
              </Label>
            </FormGroup>
            <FormGroup check>
              <Label check>
                <Input type="checkbox" name="radio1" /> Massassi Group
              </Label>
            </FormGroup>
            <FormGroup check>
              <Label check>
                <Input type="checkbox" name="radio1" /> Red Squadron
              </Label>
            </FormGroup>
            <FormGroup check>
              <Label check>
                <Input type="checkbox" name="radio1" /> Red Squadron
              </Label>
            </FormGroup>
            <FormGroup check>
              <Label check>
                <Input type="checkbox" name="radio1" /> Leia Organa's team
              </Label>
            </FormGroup>
            <FormGroup check>
              <Label check>
                <Input type="checkbox" name="radio1" /> Endor strike team
              </Label>
            </FormGroup>
            <FormGroup check>
              <Label check>
                <Input type="checkbox" name="radio1" /> Jedi Order
              </Label>
            </FormGroup>
            <FormGroup check>
              <Label check>
                <Input type="checkbox" name="radio1" /> Bright Tree tribe
              </Label>
            </FormGroup>
            <FormGroup check>
              <Label check>
                <Input type="checkbox" name="radio1" /> New Republic
              </Label>
            </FormGroup>
            <FormGroup check>
              <Label check>
                <Input type="checkbox" name="radio1" /> Resistance
              </Label>
            </FormGroup>
          </FormGroup>
          {/* email nom password */}
          <h4>Tes identifiants</h4>
          <FormGroup>
            <Label for="exampleEmail">Email:</Label>
            <Input type="email" name="email" id="exampleEmail" placeholder="" />
          </FormGroup>
          <FormGroup>
            <Label for="examplePassword">Password:</Label>
            <Input
              type="password"
              name="password"
              id="examplePassword"
              placeholder=""
            />
          </FormGroup>
          <FormGroup>
            <Label for="exampleFile">Photo:</Label>
            <Input type="file" name="file" id="exampleFile" />
          </FormGroup>
          <Button>Submit</Button>
        </Form>
      </div>
    );
  }
}

export default SignupDetails;
