import React, { Component } from 'react';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import Checkbox from 'material-ui/Checkbox';

class Card23 extends Component {

  constructor(props) {
  	super(props);
  	this.create = this.create.bind(this);
    this.state = {
      otype: []
  /*      holdtitle: false,
        religion: false,
        charity: false,
        science: false,
        pubsafe: false,
        education: false,
        amsports: false,
        prevchild: false,
        prevanimal: false,
        civicleague: false,
        agri: false,
        labor: false,
        hort: false,
        bizleague: false,
        reboard: false,
        recclub: false,
        frat: false,
        teachretire: false,
        benevolent: false,
        insure: false,
        cemetery: false,
        credit: false,
        unemploy: false,
        military: false,
        coophealth: false,
        other: ""*/

    }
  }
  handleCheck(id) {
    let found = this.state.otype.includes(id)
    if(found) {
      this.setState({
        otype: this.state.otype.filter(x => x !== id)
      })
    } else {
      this.setState({
        otype: [ ...this.state.otype, id ]
      })
    }
    console.log("updateCheck",this)
  }
  create(e) {
  	e.preventDefault();

    this.setState({
        ...this.state,
        other: this.refs.field.input.value
    })
  	this.props.onClick(this.state);
  }


  render() {
	return (
	<Card style={this.props.style} >
    	<CardHeader
      		title="Objectives of the Proposed Social Enterprise"
      		subtitle="Type of Mission"
    />
    <CardText>
     	<p>{"Do any of the following apply to your organizatin's mission and vision?"}</p>
    </CardText>
    <CardActions>
      <Checkbox
        label="Holding title to property and donating income"
        checked={this.state.otype.includes('holdtitle')}
        onCheck={() => this.handleCheck('holdtitle')} />
      <TextField ref="field" />
      <RaisedButton label="ok" onClick={this.create} />
    </CardActions>
  </Card>
	);
  }
}

export default Card23;
