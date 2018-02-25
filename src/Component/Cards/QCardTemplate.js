import React, { Component } from 'react';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import CardSelection from './CardSelection.js';

const style = {
        height: 310,
        width: 260,
        margin: 10,
        textAlign: 'left',
        display: 'inline-block',
};

class QCard extends Component {

  constructor(props) {
	super(props);
	this.state = {
	  value: null,
	};
   }

  render() {
	return (
  <Card style={style} >
    <CardHeader
      title={this.props.title}
      subtitle={this.props.subtitle}
    />
    <CardText>
     	<p>{this.props.text}</p>
    </CardText>
    <CardActions>
      <CardSelection type={this.props.type} />
    </CardActions>
  </Card>
	);
  }
}

export default QCard;
