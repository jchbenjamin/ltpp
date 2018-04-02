import React, { Component } from 'react';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import InfoClick from '../InfoClick'

class Card14 extends Component {

  constructor(props) {
  	super(props);
  	this.createY = this.createY.bind(this);
  	this.createN = this.createN.bind(this);
  }

  createY(e) {
  	e.preventDefault();
  	this.props.onClick(1);
  }
  createN(e) {
  	e.preventDefault();
  	this.props.onClick(0);
  }

  render() {
  	return (
  	<Card style={this.props.style} >
      	<CardHeader
        		title="Information about you"
        		subtitle="Political Contributions"
      />
      <CardText>
       	<p>Do you foresee the organization becoming involved in politics in any way such as Lobbying, Political contributions or campaigning?</p>
        <InfoClick message={"Lobby: to spend money for the purpose of influencing legislation by attempting to influence the opinion of the public or person in government."} />
      </CardText>
      <CardActions>
        <RaisedButton label="No" secondary={true} onClick={this.createN} />
        <RaisedButton label="Yes" primary={true} onClick={this.createY} />
      </CardActions>
    </Card>
  	);
  }
}

export default Card14;
