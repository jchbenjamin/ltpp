import React, { Component } from 'react';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';

class Card04 extends Component {
  render() {
  	return (
    	<Card style={this.props.style} >
        <CardHeader
          title="Term Sheet Generator Information"
          subtitle="Sharing benefits with co-founders"
        />
        <CardText>
          <p>Even if you are ultimately in control, you probably have other people in mind who will be part of your venture.</p>
          <p>These other people may be volunteers, they may contribute their time, skills, and talent to help your cause, or they may give money or other resources.</p>
          <p> Once we have information on these people and what they offer to your organization we can help you choose a legal entity along with some rules to form it.</p>
        </CardText>
        <CardActions>
          <RaisedButton label="ok" onClick={this.props.onClick} />
        </CardActions>
      </Card>
  	);
  }
}

export default Card04;
