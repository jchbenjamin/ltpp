import React, { Component } from 'react';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';

class Card15 extends Component {

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
        		subtitle="Gambling"
      />
      <CardText>
       	<p>Does the organization expect to operate gambling or have lottery type fundraising activities?</p>
      </CardText>
      <CardActions>
        <RaisedButton label="No" secondary={true} onClick={this.createN} />
        <RaisedButton label="Yes" primary={true} onClick={this.createY} />
      </CardActions>
    </Card>
  	);
  }
}

export default Card15;
