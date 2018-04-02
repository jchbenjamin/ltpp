import React, { Component } from 'react';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

class Card24 extends Component {

  constructor(props) {
	super(props);
	this.create = this.create.bind(this);
  }

  create(e) {
  	e.preventDefault();
    let prp = {
      viz: this.refs.field.input.value
    };
  	this.props.onClick(prp);
  }


  render() {
	return (
	<Card style={this.props.style} >
    	<CardHeader
      		title="Objectives of the Proposed Social Enterprise"
      		subtitle="Vision Statement"
    />
    <CardText>
     	<p>{"What is your organization's vision statement?"}</p>
    </CardText>
    <CardActions>
      <TextField ref="field" />
      <RaisedButton label="ok" onClick={this.create} />
    </CardActions>
  </Card>
	);
  }
}

export default Card24;
