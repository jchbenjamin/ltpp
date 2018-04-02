import React, { Component } from 'react';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

class Card17 extends Component {

  constructor(props) {
  	super(props);
  	this.create = this.create.bind(this);
  }

  create(e) {
  	e.preventDefault();
    let prp = {
      goods: this.refs.goodsField.input.value,
      servs: this.refs.servsField.input.value
    };
  	this.props.onClick(prp);
  }

  render() {
	return (
	<Card style={this.props.style} >
    	<CardHeader
      		title="Information about you"
      		subtitle="Type of Business"
    />
    <CardText>
     	<p>What is the type of business you plan to create?</p>
    </CardText>
    <CardActions>
      <p>Goods</p>
      <TextField ref="goodsField" />
      <p>Services</p>
      <TextField ref="servsField" />
      <RaisedButton label="ok" onClick={this.create} />
    </CardActions>
  </Card>
	);
  }
}

export default Card17;
