import React, { Component } from 'react';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
 
class Card0002 extends Component {



  render() {
	return (
	<Card style={this.props.style} >
    	<CardHeader
      		title="We are here to help"
      		subtitle="This is an online assistance service"
    />
    <CardText>
     	<p>We would like to help you, but our power to assist you depends on the facts of your specific case.</p>
    </CardText>
    <CardActions>
      <RaisedButton label="ok" onClick={this.props.onClick} />
    </CardActions>
  </Card>
	);
  }
}

export default Card0002;
