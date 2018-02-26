import React, { Component } from 'react';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import Toggle from 'material-ui/Toggle';
import RaisedButton from 'material-ui/RaisedButton';

class Card8000 extends Component {

  render() {
	return (
	<Card style={this.props.style} >
    	<CardHeader
      		title="Signature of Authenticity"
      		subtitle="Please sign if you agree"
    />
    <CardText>
	<p>I attest that all information entered into this application is true and accurate to the best of my recollection.</p>
    </CardText>
    <CardActions>
      <Toggle label="I agree" />
      <RaisedButton label="ok" onClick={this.props.onClick} />
    </CardActions>
  </Card>
	);
  }
}

export default Card8000;
