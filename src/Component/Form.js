import React, { Component } from 'react';

//card imports
//Section 0: Preamble
import Card00 from './Cards/Card00.js';
import Card01 from './Cards/Card01.js';
import Card02 from './Cards/Card02.js';
import Card03 from './Cards/Card03.js';
import Card04 from './Cards/Card04.js';
import Card05 from './Cards/Card05.js';
import Card06 from './Cards/Card06.js';
import Card10 from './Cards/Card10.js';
import Card11 from './Cards/Card11.js';
import Card12 from './Cards/Card12.js';
import Card13 from './Cards/Card13.js';
import Card14 from './Cards/Card14.js';
import Card15 from './Cards/Card15.js';
import Card16 from './Cards/Card16.js';
import Card17 from './Cards/Card17.js';
import Card21 from './Cards/Card21.js';
import Card22 from './Cards/Card22.js';
import Card23 from './Cards/Card23.js';

const cardStyle = {
	height: 580,
	width: 500,
	margin: 10,
	textAlign: 'left',
	display: 'inline-block'
};

class Form extends Component {

	constructor(props) {
		super(props);
		this.state = {
			cardshow: {
				C00: 0, //info1
				C01: 1,
				C02: 1,
				C03: 1,
				C04: 1,
				C05: 1,
				C06: 1,
				C10: 1,
				C11: 1,
				C12: 1,
				C13: 1,
				C14: 1,
				C15: 1,
				C16: 1,
				C17: 1,
				C21: 1,
				C22: 1,
				C23: 1,
			},
		};
	}
	changeCard(prev, next) {
		this.setState({
			cardshow: {
				...this.state.cardshow,
				[prev]: 1,
				[next]: 0
			}
		});
	}
	handleIn(prev,next,varname,i) {
		this.setState({
			[varname]: i
		});
		this.changeCard(prev, next);
	}
	skipP(nfp,fp) {
		return( this.state.forprofit ? fp : nfp )
	}
	handleClick(card, i) {
		var nextC = 'C00'
		switch(card) {
			case 'C00':
				this.changeCard(card,'C01');
				break;
			case 'C01':
				this.changeCard(card,'C02');
				break;
			case 'C02':
				this.changeCard(card,'C03');
				break;
			case 'C03':
				this.changeCard(card,'C04');
				break;
			case 'C04':
				this.changeCard(card,'C05');
				break;
			case 'C05':
				this.changeCard(card,'C06');
				break;
			case 'C06':
				this.changeCard(card,'C10');
				break;
			case 'C10':
				this.setState({
					forprofit: i
				});
				nextC = this.skipP('C11','C12')
				this.changeCard(card,nextC);
				break;
			case 'C11':
				this.handleIn(card,'C12','owners',i)
				break;
			case 'C12':
				this.setState({
					pinvolved: i.ppl
				});
				this.changeCard(card,'C13');
				break;
			case 'C13':
				nextC = this.skipP('C14','C17')
				this.handleIn(card,nextC,'numowners',i);
				break;
			case 'C14':
				this.handleIn(card,'C15','lobbying',i);
				break;
			case 'C15':
				this.handleIn(card,'C16','gambling',i)
				break;
			case 'C16':
				this.handleIn(card,'C17','freegs',i)
				break;
			case 'C17':
				this.setState({
					goods: i.goods,
					servs: i.servs
				});
				this.changeCard(card,'C21');
				break;
			case 'C21':
				this.setState({
					vision: i.viz
				});
				this.changeCard(card,'C22');
				break;
			case 'C22':
				this.setState({
					mission: i.mis
				});
				nextC = this.skipP('C23','C24')
				this.changeCard(card,nextC);
				break;
			case 'C23':
				this.setState({
					otype: i.otype,
					othertype: i.other
				});
				this.changeCard(card,'C24')
				break;
			default:
				break;
		}
		console.log("handleClick",this.state)
	}

	render() {
		//console.log("render", this);
		return(
		<div className="Form">
		  {!this.state.cardshow.C00 && <Card00 onClick={i => this.handleClick('C00', i)} style={cardStyle} client={this.state.clientData} />}
		  {!this.state.cardshow.C01 && <Card01 onClick={i => this.handleClick('C01', i)} style={cardStyle} client={this.state.clientData} />}
		  {!this.state.cardshow.C02 && <Card02 onClick={i => this.handleClick('C02', i)} style={cardStyle} client={this.state.clientData} />}
		  {!this.state.cardshow.C03 && <Card03 onClick={i => this.handleClick('C03', i)} style={cardStyle} client={this.state.clientData} />}
		  {!this.state.cardshow.C04 && <Card04 onClick={i => this.handleClick('C04', i)} style={cardStyle} client={this.state.clientData} />}
		  {!this.state.cardshow.C05 && <Card05 onClick={i => this.handleClick('C05', i)} style={cardStyle} client={this.state.clientData} />}
		  {!this.state.cardshow.C06 && <Card06 onClick={i => this.handleClick('C06', i)} style={cardStyle} client={this.state.clientData} />}
		  {!this.state.cardshow.C10 && <Card10 onClick={i => this.handleClick('C10', i)} style={cardStyle} client={this.state.clientData} />}
		  {!this.state.cardshow.C11 && <Card11 onClick={i => this.handleClick('C11', i)} style={cardStyle} client={this.state.clientData} />}
		  {!this.state.cardshow.C12 && <Card12 onClick={i => this.handleClick('C12', i)} style={cardStyle} client={this.state.clientData} />}
		  {!this.state.cardshow.C13 && <Card13 onClick={i => this.handleClick('C13', i)} style={cardStyle} client={this.state.clientData} />}
		  {!this.state.cardshow.C14 && <Card14 onClick={i => this.handleClick('C14', i)} style={cardStyle} client={this.state.clientData} />}
		  {!this.state.cardshow.C15 && <Card15 onClick={i => this.handleClick('C15', i)} style={cardStyle} client={this.state.clientData} />}
		  {!this.state.cardshow.C16 && <Card16 onClick={i => this.handleClick('C16', i)} style={cardStyle} client={this.state.clientData} />}
		  {!this.state.cardshow.C17 && <Card17 onClick={i => this.handleClick('C17', i)} style={cardStyle} client={this.state.clientData} />}
		  {!this.state.cardshow.C21 && <Card21 onClick={i => this.handleClick('C21', i)} style={cardStyle} client={this.state.clientData} />}
		  {!this.state.cardshow.C22 && <Card22 onClick={i => this.handleClick('C22', i)} style={cardStyle} client={this.state.clientData} />}
			{!this.state.cardshow.C23 && <Card23 onClick={i => this.handleClick('C23', i)} style={cardStyle} client={this.state.clientData} />}
			</div>
		);
	}

}

export default Form;
