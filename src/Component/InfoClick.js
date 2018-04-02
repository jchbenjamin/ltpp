import React, { Component } from 'react';
import IconButton from 'material-ui/IconButton';
import Help from 'material-ui/svg-icons/action/help';
import Popover from 'material-ui/Popover';

class InfoClick extends Component {

  constructor(props) {
    super(props);
    this.state = {
      open: false
    }
  }

  handleClick = (e) => {
    e.preventDefault();
    this.setState({
      open: true,
      anchorEl: e.currentTarget
    });
  }

  handleClose = () => {
    this.setState({open: false});
  }

  render() {
    return(
      <div>
      	<IconButton onClick={this.handleClick}>
          <Help />
        </IconButton>
        <Popover
          open={this.state.open}
          anchorEl={this.state.anchorEl}
          onRequestClose={this.handleClose}
        > <p>
            {this.props.message}
          </p>
        </Popover>
      </div>
  	);
  }
}

export default InfoClick;
