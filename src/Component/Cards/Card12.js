import React, { Component } from 'react';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

class Card12 extends Component {

  constructor(props) {
  	super(props);
  	this.create = this.create.bind(this);
  }

  create(e) {
  	e.preventDefault();
    let prp = {
      ppl: this.refs.field.input.value
    };
  	this.props.onClick(prp);
  }


  render() {
  	return (
  	<Card style={this.props.style} >
      	<CardHeader
        		title="Information about you"
        		subtitle="Involvement"
      />
      <CardText>
       	<p>How many people are involved in starting the business?</p>
      </CardText>
      <CardActions>
        <TextField ref="field" />
        <RaisedButton label="Ok" primary={true} onClick={this.create} />
      </CardActions>
    </Card>
  	);
  }
}

export default Card12;
