import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';



class TitleBar extends Component {

  constructor(props) {
	super(props);
	this.state = {
		title: "Cyber Helper"
	};
  }

  render() {

  return(
  	<AppBar
   	 title={this.state.title}
    		iconClassNameRight="muidocs-icon-navigation-expand-more"
  		/>
	);
 }
}

export default TitleBar;
