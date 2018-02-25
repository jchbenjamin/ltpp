import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';



class TitleBar extends Component {

  constructor(props) {
	super(props);
	
  }

  render() {

  return(
  	<AppBar
   	 title={this.props.title}
   		
  		/>
	);
 }
}

export default TitleBar;
