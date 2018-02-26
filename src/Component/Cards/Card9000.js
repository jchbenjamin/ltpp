import React, { Component } from 'react';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';

class Card9000 extends Component {

  render() {
	return (
	<Card style={this.props.style} >
    	<CardHeader
      		title="Exit"
      		subtitle="Thank you for using Cyber Helper"
    />
    <CardText>
     	<p>Unfortunately, we cannot help you with your legal issue.</p>
    </CardText>
  </Card>
	);
  }
}

export default Card9000;
