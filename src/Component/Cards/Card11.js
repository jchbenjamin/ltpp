import React, { Component } from 'react';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';

class Card11 extends Component {

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
        		subtitle="Ownership"
      />
      <CardText>
       	<p>Will the organization have owners?</p>
        <p>(i.e. Will the organization give financial benefits to employees other than a salary and bonus. For example, a share of the profits?)</p>
      </CardText>
      <CardActions>
        <RaisedButton label="No Owners" secondary={true} onClick={this.createN} />
        <RaisedButton label="Owners" primary={true} onClick={this.createY} />
      </CardActions>
    </Card>
  	);
  }
}

export default Card11;
