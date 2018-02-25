import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TitleBar from './Component/TitleBar.js';
import Form from './Component/Form.js';

import CyberQuestions from './Logic/Cyber.js';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
	title: "Cyber Helper"
	
    };
}

  render() {
	console.log("App ", this);
    return (
      <MuiThemeProvider>
	<TitleBar title={this.state.title}/>
        <Form />
      </MuiThemeProvider>
    );
  }
}

export default App;
