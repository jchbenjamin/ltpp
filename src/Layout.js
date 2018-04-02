import React, { Component } from 'react';
import TitleBar from './Component/TitleBar.js';
import Form from './Component/Form.js';

class Layout extends Component {
  constructor(props) {
    super(props);
    this.state = {
			title: "Social Entrepreneurship"
  };
}

	render() {
		return (
      <div>
				<TitleBar
					title={this.state.title}
				/>
        <Form />
      </div>
    );
  }
}

export default Layout;
