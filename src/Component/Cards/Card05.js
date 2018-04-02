import React, { Component } from 'react';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';

class Card05 extends Component {
  render() {
  	return (
    	<Card style={this.props.style} >
        <CardHeader
          title="Term Sheet Generator Information"
          subtitle="The different entities"
        />
        <CardText>
          <p>Just as there are many different types of businessses and causes, there are different arragnements the law allows.</p>
          <p>This tool will assist you in finding a legal arrangement appropriate to the needs of your organization.</p>
          <p>To really understand your situation you should talk to a lawyer.</p>
          <p>Ultimately it is up to you what you choose to create.</p>
          <p>This app can help guide you in that decision.</p>
        </CardText>
        <CardActions>
          <RaisedButton label="ok" onClick={this.props.onClick} />
        </CardActions>
      </Card>
  	);
  }
}

export default Card05;
