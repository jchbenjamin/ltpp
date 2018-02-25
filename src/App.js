import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


import './App.css';
import AppLayout from './Component/AppLayout.js';

class App extends Component {


  render() {
    return (
      <MuiThemeProvider>
        <AppLayout />
      </MuiThemeProvider>
    );
  }
}

export default App;
