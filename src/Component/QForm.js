import React, { Component } from 'react';
import CyberQuestions from '../Logic/Cyber.js';
import QCard from './QCard.js';

class QForm extends Component {

	constructor(props) {
		super(props);	
		//console.log(CyberQuestions);	
		this.questions = CyberQuestions.questions;
		//console.log(this);
	}
	render() {
		return(
		<div class="QForm">
		  <QCard
		    id={this.questions[0].id} title={this.questions[0].title} type={this.questions[0].type} text={this.questions[0].text}
		  />
		</div>
		);
	}

}

export default QForm;
