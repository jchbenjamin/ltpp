import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TitleBar from './Component/TitleBar.js';
import Form from './Component/Form.js';
import grey700 from 'material-ui/styles/colors';
import pink700 from 'material-ui/styles/colors';
//import CyberQuestions from './Logic/Cyber.js';

import './App.css';

const titleStyle = {
	color: pink700
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
	title: "Cyber Helper"
	
    };
}

  render() {
    return (
      <MuiThemeProvider>
	<TitleBar
		title={this.state.title} 
		style={titleStyle}

	/>
        <Form />
      </MuiThemeProvider>
    );
  }
}

export default App;
