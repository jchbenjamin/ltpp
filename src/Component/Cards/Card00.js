import React, { Component } from 'react';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';

class Card00 extends Component {
  render() {
  	return (
    	<Card style={this.props.style} >
        <CardHeader
          title="Social Entrepreneurship Spring '18 Project'"
          subtitle="Please read before starting"
        />
        <CardText>
          <p>Welcome to the social entrepreneurship term sheet generator.</p>
          <p>This tool is designed for use in conjunction with a real attorney.</p>
          <p>If you are serious about starting a venture, please do not replace this tool for actual legal counsel.</p>
        </CardText>
        <CardActions>
          <RaisedButton label="ok" onClick={this.props.onClick} />
        </CardActions>
      </Card>
  	);
  }
}

export default Card00;
