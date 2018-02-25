import React, { Component } from 'react';
import TitleBar from './TitleBar.js';
import QForm from './QForm.js';

const style = {
	height: 440,
	width: 300,
	margin: 10,
	textAlign: 'center',
	display: 'inline-block',
};

class AppLayout extends Component {
  render() {
    return (
      <div className="AppLayout">
	<TitleBar />
	<div style={style}>
	  <QForm />
	</div>
      </div>
    );
  }
}

export default AppLayout;
