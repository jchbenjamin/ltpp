import React, { Component } from 'react';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import InfoClick from '../InfoClick';
class Card16 extends Component {

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
        		title="Information about you"
        		subtitle="Free Goods or Services"
      />
      <CardText>
       	<p>Will the organization provide free goods or services?</p>
        <InfoClick message={"Goods and services: goods are the products and services are a person's labor. For example, when you have your oil changed the goods are the oil, oil filter, and any other product the services are the employee going under your car and actually doing the oil change."} />
      </CardText>
      <CardActions>
        <RaisedButton label="No" secondary={true} onClick={this.createN} />
        <RaisedButton label="Yes" primary={true} onClick={this.createY} />
      </CardActions>
    </Card>
  	);
  }
}

export default Card16;
