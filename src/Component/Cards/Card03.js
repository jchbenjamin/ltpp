import React, { Component } from 'react';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';

class Card03 extends Component {
  render() {
  	return (
    	<Card style={this.props.style} >
        <CardHeader
          title="Term Sheet Generator Information"
          subtitle="What to consider in selecting and entity"
        />
        <CardText>
          <p>A thought out and well-formed set of rules can:</p>
            <ul>
              <li>Help your organization raise funds from reputable sources,</li>
              <li>Ease tensions between members should they arise,</li>
              <li>Plan for taxes, and</li>
              <li>Help you avoid surprises that may arise because of certain rules of business operations of your state.</li>
            </ul>
        </CardText>
        <CardActions>
          <RaisedButton label="ok" onClick={this.props.onClick} />
        </CardActions>
      </Card>
  	);
  }
}

export default Card03;
