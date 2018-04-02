import React, { Component } from 'react';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';

class Card0001 extends Component {

  render() {
	return (
	<Card style={this.props.style} >
    	<CardHeader
      		title="Welcome to Cyber Helper"
      		subtitle="Please read before starting"
    />
    <CardText>
     	<p>This is an experimental tool to help you respond to CyberStalking</p>
	<p>All information is private</p>
    </CardText>
    <CardActions>
      <RaisedButton label="ok" onClick={this.props.onClick} />
    </CardActions>
  </Card>
	);
  }
}

export default Card0001;
