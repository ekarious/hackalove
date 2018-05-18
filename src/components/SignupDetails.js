import React, { Component } from "react";
import { Col, Row } from "reactstrap";
import {
  CustomInput,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText
} from "reactstrap";
import PinkButton from "./PinkButton";

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
      <Form className="SignupDetails">
        {/* email nom password */}
        <h4>Tes identifiants</h4>
        <FormGroup>
          <Label for="exampleEmail">Email:</Label>
          <Input
            type="email"
            name="email"
            id="exampleEmail"
            className="input"
            placeholder=""
          />
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword">Password:</Label>
          <Input
            type="password"
            name="password"
            id="examplePassword"
            className="input"
            placeholder=""
          />
        </FormGroup>
        <FormGroup>
          <Label for="photo">Photo:</Label>
          <Input type="file" name="photo" id="photo" className="input" />
        </FormGroup>
        {/* Ton apparence */}
        <h4>Ton apparence</h4>
        {/* nom */}
        <FormGroup>
          <Label for="nom">Nom:</Label>
          <Input
            type="name"
            name="name"
            id="nom"
            className="input"
            placeholder=""
          />
        </FormGroup>
        {/* planete */}
        <FormGroup>
          <Label for="planete">Planète:</Label>
          <Input
            type="planete"
            name="planete"
            id="planete"
            className="input"
            placeholder=""
          />
        </FormGroup>
        {/* gender */}

        <Label for="genre">Genre:</Label>
        <FormGroup>
          <div>
            <CustomInput
              type="radio"
              id="genderFemale"
              name="gender"
              value="female"
              label="Female"
              defaultChecked
            />
            <CustomInput
              type="radio"
              id="genderMale"
              value="male"
              name="gender"
              label="Male"
            />
          </div>
        </FormGroup>
        {/* yeux */}
        <FormGroup>
          <Label for="yeux">Yeux:</Label>
          <Input type="select" name="select" className="select" id="eyes">
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
          <Label for="hair">Cheveux:</Label>
          <Input type="select" name="select" className="select" id="hair">
            <option>brun</option>
            <option>blond</option>
            <option>roux</option>
            <option>coupe Mulet</option>
            <option>chauve</option>
          </Input>
        </FormGroup>
        {/* espèce: */}
        <FormGroup>
          <Label for="species">Espèces:</Label>
          <Input type="select" name="select" className="select" id="species">
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
              <Input type="checkbox" name="1" /> Alliance to Restore the
              Republic
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input type="checkbox" name="2" /> Red Squadron
            </Label>
          </FormGroup>
          {/* gender */}

          <Label for="genre">Genre:</Label>
          <FormGroup check>
            <Label check>
              <Input type="checkbox" name="3" /> Rogue Squadron
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input type="checkbox" name="4" /> Massassi Group
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input type="checkbox" name="5" /> Leia Organa's team
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input type="checkbox" name="6" /> Endor strike team
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input type="checkbox" name="7" /> Jedi Order
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input type="checkbox" name="8" /> Bright Tree tribe
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input type="checkbox" name="9" /> New Republic
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input type="checkbox" name="10" /> Resistance
            </Label>
          </FormGroup>
        </FormGroup>
        <PinkButton link="/filters" text="Envoyer" />
      </Form>
    );
  }
}

export default SignupDetails;
