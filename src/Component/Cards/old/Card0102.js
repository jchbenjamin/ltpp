import React, { Component } from 'react';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

class Card0101 extends Component {

  constructor(props) {
	super(props);
	this.create = this.create.bind(this);
  }

  create(e) {
	e.preventDefault();
	let name = this.refs.addField.input.value;
	this.props.onClick(name);
  }

  render() {
	return (
	<Card style={this.props.style} >
    	<CardHeader
      		title="Basic user info"
      		subtitle="Address"
    />
    <CardText>
     	<p>What is your address?</p>
    </CardText>
    <CardActions>
      <TextField ref="addField" />
      <RaisedButton label="ok" onClick={this.create} />
    </CardActions>
  </Card>
	);
  }
}

export default Card0101;
