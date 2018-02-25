import React, { Component } from 'react';
import CyberQuestions from '../Logic/Cyber.js';
//import CyberInfo from '../Logic/Info.js';

//card imports
import Card0001 from './Cards/Card0001.js';
import Card0002 from './Cards/Card0002.js';

const cardStyle = {
	height: 310,
	width: 260,
	margin: 10,
	textAlign: 'left',
	display: 'inline-block'
};

class Form extends Component {

	constructor(props) {
		super(props);	
		//console.log(CyberQuestions);	
		this.state = {
			isHidden: {
				C0001: 0,
				C0002: 1
			}
		};
		
		//console.log(this);
	}
	render() {
		return(
		<div class="Form">
		  {!this.state.isHidden.C0001 && <Card0001 style={cardStyle}/>}
		  {!this.state.isHidden.C0002 && <Card0002 style={cardStyle}/>}
		</div>
		);
	}

}

export default Form;
