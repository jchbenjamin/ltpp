import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import Block from 'material-ui/svg-icons/content/block';
import pink from 'material-ui/styles/colors';

class TitleBar extends Component {

  constructor(props) {
	super(props);
	
  }

  render() {

  return(
  	<AppBar
   	 title={this.props.title}
	 style={this.props.style}
   	 iconElementLeft={<IconButton><Block /></IconButton>}		
  		/>
	);
 }
}

export default TitleBar;
