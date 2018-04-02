import React, { Component } from 'react';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
class Card12 extends Component {

  constructor(props) {
  	super(props);
  	this.create = this.create.bind(this);
    this.state = {
      val: "one"
    }
  }
  create(e) {
  	e.preventDefault();
  	this.props.onClick(this.state.val);
  }
  changeRadio = (e, v) => {
    console.log(this)
    this.setState({
      val: v
    })
  }
  render() {
    console.log(this)
  	return (
  	<Card style={this.props.style} >
      	<CardHeader
        		title="Information about you"
        		subtitle="Owners"
      />
      <CardText>
       	<p>How many owners would the business have?</p>
      </CardText>
      <CardActions>
        <RadioButtonGroup name="owners" defaultSelected="one" onChange={this.changeRadio}>
          <RadioButton value="one" label="One" />
          <RadioButton value="two" label="Two" />
          <RadioButton value="more" label="More than two" />
        </RadioButtonGroup>
        <RaisedButton label="Ok" primary={true} onClick={this.create} />
      </CardActions>
    </Card>
  	);
  }
}

export default Card12;
