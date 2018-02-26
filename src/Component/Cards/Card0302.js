import React, { Component } from 'react';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import Checkbox from 'material-ui/Checkbox';
import RaisedButton from 'material-ui/RaisedButton';

class Card0302 extends Component {

  state = {
     threat: false,
     harass: false,
     obscene: false
  }

  constructor(props) {
	super(props);
	this.create = this.create.bind(this);
  }

  create(e) {
	e.preventDefault();
	this.props.onClick(this.state.threats,this.state.harass,this.state.obscene);
  }

  updateCheckT() {
	this.setState((oldState) => {
		return {
		 threat: !oldState.threat
		};
	});
  }	
  updateCheckH() {
        this.setState((oldState) => {
                return {
                 harass: !oldState.harass
                };
        });
  }
  updateCheckO() {
        this.setState((oldState) => {
                return {
                 obscene: !oldState.obscene
                };
        });
  }


  render() {
	return (
	<Card style={this.props.style} >
    	<CardHeader
      		title="Incident Report"
      		subtitle="Types of behavior"
    />
    <CardText>
     	<p>How would you charactize the online or electronic threats, harassment, abuse, bullying, or stalking?</p>
        <Checkbox
          label="Threats"
          checked={this.state.threat}
	  onCheck={this.updateCheckT.bind(this)}
        />
	<Checkbox
          label="Harassment"
          checked={this.state.harass}
	  onCheck={this.updateCheckH.bind(this)}
        />
        <Checkbox
          label="Obscenity"
          checked={this.state.obscene}
	  onCheck={this.updateCheckO.bind(this)}
        />
    </CardText>
    <CardActions>
      <RaisedButton label="ok" primary={true} onClick={this.create} />
    </CardActions>
  </Card>
	);
  }
}

export default Card0302;
