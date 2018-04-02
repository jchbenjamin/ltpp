import React, { Component } from 'react';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';

class Card06 extends Component {
  render() {
  	return (
    	<Card style={this.props.style} >
        <CardHeader
          title="Term Sheet Generator Information"
          subtitle="Disclaimer against selecting general partnerships"
        />
        <CardText>
          <p>As a preliminary warning and legal precaution, we must say this:</p>
          <p><i>{"This tool assumes your choice of business entity will not be a general partnership because we assume nobody wants to be personally liable for all the company's debts."}</i></p>

        </CardText>
        <CardActions>
          <RaisedButton label="ok" onClick={this.props.onClick} />
        </CardActions>
      </Card>
  	);
  }
}

export default Card06;
