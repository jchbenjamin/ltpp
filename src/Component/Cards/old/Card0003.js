import React, { Component } from 'react';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';

class Card0003 extends Component {

  render() {
	return (
	<Card style={this.props.style} >
    	<CardHeader
      		title="Answering questions"
      		subtitle="Please answer to the best of your ability"
    />
    <CardText>
     	<p>Please take your time and answer all of the questions to the best of your ability</p>
    </CardText>
    <CardActions>	
      <RaisedButton label="ok" onClick={this.props.onClick(1)} />
    </CardActions>
  </Card>
	);
  }
}

export default Card0003;
