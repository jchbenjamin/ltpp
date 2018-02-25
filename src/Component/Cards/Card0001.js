import React, { Component } from 'react';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import SelOk from '../Selection/SelOk.js';

class Card0001 extends Component {

  constructor(props) {
	super(props);
   }

  render() {
	return (
	<Card style={this.props.style} >
    	<CardHeader
      		title="Welcome to Cyber Helper"
      		subtitle="Please read before starting"
    />
    <CardText>
     	<p>This is an experimental tool to help you respond to CyberStalking</p>
    </CardText>
    <CardActions>
      <SelOk />
    </CardActions>
  </Card>
	);
  }
}

export default Card0001;
