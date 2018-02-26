import React, { Component } from 'react';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
//import ImageUploader from 'react-image-upload';

class Card0501 extends Component {


  constructor(props) {
	super(props);
	this.create = this.create.bind(this);
	this.state = { image: "" };
  }

  create(e) {
	e.preventDefault();
	this.props.onClick(this.state.image);
  }

  render() {
	return (
	<Card style={this.props.style} >
    	<CardHeader
      		title="Evidence Upload"
      		subtitle="Upload Screenshots of your incident"
    />
    <CardText>
	<p>Please upload screenshots or other graphical evidence of the behavior you described earlier.</p>
    </CardText>
    <CardActions>
      <RaisedButton label="ok" secondary={true} onClick={this.create} />
    </CardActions>
  </Card>
	);
  }
}

export default Card0501;
