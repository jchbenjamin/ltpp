import React, { Component } from 'react';
import CyberQuestions from '../Logic/Cyber.js';
//import CyberInfo from '../Logic/Info.js';

//card imports
import Card0001 from './Cards/Card0001.js';
import Card0002 from './Cards/Card0002.js';
import Card0003 from './Cards/Card0003.js';
import Card0101 from './Cards/Card0101.js';
import Card0102 from './Cards/Card0102.js';
import Card0301 from './Cards/Card0301.js';
import Card0302 from './Cards/Card0302.js';
import Card0501 from './Cards/Card0501.js';

import Card8000 from './Cards/Card8000.js';
import Card9000 from './Cards/Card9000.js';
import Card9001 from './Cards/Card9001.js';
//import Card0003 from './Cards/Card0003.js';

const cardStyle = {
	height: 380,
	width: 300,
	margin: 10,
	textAlign: 'left',
	display: 'inline-block'
};

class Form extends Component {

	constructor(props) {
		super(props);	
		this.state = {
			C0001: 0, //info1
			C0002: 1, //info2
			C0003: 1, //info3
			C0101: 1, //name
			C0102: 1, //address
			C0301: 1, //info
			C0302: 1, //checkbox
			C0501: 1, //image
			C8000: 1, //sig
			C9000: 1, //can't help
			C9001: 1, //form output end
			name: "",
			dob: "",
			address: "",
			accname: "",
			accadd: "",
			threat: 0,
			harass: 0,
			obscene: 0,
			communicate: 0,
			commupset: 0,
			image: "",
			
		};

	}

	handleC0001(i) {
		this.setState({
			C0001: 1,
			C0002: 0
		});
	}
	handleC0002(i) {
		this.setState({
			C0002: 1,
			C0003: 0
		});
	}
	handleC0003(i) {
		this.setState({
			C0003: 1,
			C0101: 0
		});
	}
	handleC0101(i) {
		this.setState({
			C0101: 1,
			C0102: 0,
			name: i
		});
	}
	handleC0102(i) {
		this.setState({
			C0102: 1,
			C0301: 0,
			address: i
		});
	}
	handleC0301(i) {
		if(!i) {
			this.setState({C9000: 0});
		}
		else {
			this.setState({C0302: 0});
		}
		this.setState({C0301: 1});
	}
	handleC0302(t,h,o) {
		if(t) { this.setState({threat: 1}) };
		if(h) { this.setState({harass: 1}) };
		if(o) { this.setState({obscene: 1}) };
		this.setState({
			C0302: 1,
			C8000: 0,
		});
	}
	handleC8000(i) {
		this.setState({
			C8000: 1,
			C9001: 0
		});
	}
	render() {
		return(
		<div class="Form">
		  {!this.state.C0001 && <Card0001 onClick={i=> this.handleC0001(i)} style={cardStyle}/>}
		  {!this.state.C0002 && <Card0002 onClick={i=> this.handleC0002(i)} style={cardStyle}/>}
		  {!this.state.C0003 && <Card0003 onClick={i=> this.handleC0003(i)} style={cardStyle}/>}
		  {!this.state.C0101 && <Card0101 onClick={i=> this.handleC0101(i)} style={cardStyle}/>}
		  {!this.state.C0102 && <Card0102 onClick={i=> this.handleC0102(i)} style={cardStyle}/>}
		  {!this.state.C0301 && <Card0301 onClick={i=> this.handleC0301(i)} style={cardStyle}/>}
		  {!this.state.C0302 && <Card0302 onClick={i=> this.handleC0302(i)} style={cardStyle}/>}
		  {!this.state.C8000 && <Card8000 onClick={i=> this.handleC8000(i)} style={cardStyle}/>}
		  {!this.state.C9000 && <Card9000 style={cardStyle}/>}
		  {!this.state.C9001 && <Card9001 style={cardStyle}/>}
		</div>
		);
	}

}

export default Form;
