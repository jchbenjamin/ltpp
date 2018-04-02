import React, { Component } from 'react';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';

class Card10 extends Component {

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
        		subtitle="Tax-exempt"
      />
      <CardText>
       	<p>If you know you wish to form a for-profit entity please click.</p>
      </CardText>
      <CardActions>
        <RaisedButton label="For Profit Entity" secondary={true} onClick={this.createY} />
        <RaisedButton label="Keep Going" primary={true} onClick={this.createN} />
      </CardActions>
    </Card>
  	);
  }
}

export default Card10;
