import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import Gavel from 'material-ui/svg-icons/action/gavel';

class TitleBar extends Component {
  render() {
    return(
    	<AppBar
     	 title={this.props.title}
    	 style={this.props.style}
       	 iconElementLeft={<IconButton><Gavel /></IconButton>}
  		/>
  	);
  }
}

export default TitleBar;
