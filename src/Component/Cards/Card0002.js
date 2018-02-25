import React, { Component } from 'react';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import SelOk from '../Selection/SelOk.js';

class Card0002 extends Component {

  constructor(props) {
	super(props);
   }

  render() {
	return (
	<Card style={this.props.style} >
    	<CardHeader
      		title="We are here to help"
      		subtitle="This is an online legal service"
    />
    <CardText>
     	<p>We would like to help you, but no tool can replace a face-to-face conversation with a lawyer</p>
    </CardText>
    <CardActions>
      <SelOk />
    </CardActions>
  </Card>
	);
  }
}

export default Card0002;
