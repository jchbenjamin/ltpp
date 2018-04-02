import React, { Component } from 'react';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';

class Card0301 extends Component {

  constructor(props) {
	super(props);
	this.createY = this.createY.bind(this);
	this.createN = this.createN.bind(this);
  }

  createY(e) {
	e.preventDefault();
	this.props.onClick(1);
  }
  createN(e) {
	e.preventDefault();
	this.props.onClick(0);
  }

  render() {
	return (
	<Card style={this.props.style} >
    	<CardHeader
      		title="Incident Report"
      		subtitle="Threat of Abuse"
    />
    <CardText>
     	<p>Has someone threatened, abused, bullied, harassed or sent obscene materials to you online or electronically?</p>
    </CardText>
    <CardActions>
      <RaisedButton label="yes" primary={true} onClick={this.createY} />
      <RaisedButton label="no" secondary={true} onClick={this.createN} />
    </CardActions>
  </Card>
	);
  }
}

export default Card0301;
