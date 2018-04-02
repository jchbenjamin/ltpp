import React, { Component } from 'react';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';

class Card02 extends Component {
  render() {
  	return (
    	<Card style={this.props.style} >
        <CardHeader
          title="Term Sheet Generator Information"
          subtitle="Selecting the right type of entity"
        />
        <CardText>
          <p>Informing the decision of business entity is information about the other people involved in your idea.</p>
          <p>A great business idea should have a solid set of internal guidelines and expectations to help the idea grow.</p>
          <p>These guidelines need agreed upon rules between other people who are involved.</p>
        </CardText>
        <CardActions>
          <RaisedButton label="ok" onClick={this.props.onClick} />
        </CardActions>
      </Card>
  	);
  }
}

export default Card02;
