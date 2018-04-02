import React, { Component } from 'react';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';

class Card01 extends Component {
  render() {
  	return (
    	<Card style={this.props.style} >
        <CardHeader
          title="Term Sheet Generator Information"
          subtitle="Starting your business"
        />
        <CardText>
          <p>Many people have ideas for a business or cause they are ready to put into action.</p>
          <p>First, you will want to form a legal entity separate from yourself.</p>
          <p>There are a few different styles of business entity the law recognizes.
            This tool will help you pick what is right for you.</p>
        </CardText>
        <CardActions>
          <RaisedButton label="ok" onClick={this.props.onClick} />
        </CardActions>
      </Card>
  	);
  }
}

export default Card01;
