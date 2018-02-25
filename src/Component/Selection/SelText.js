
import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import DatePicker from 'material-ui/DatePicker';
import Toggle from 'material-ui/Toggle';

class CardSelection extends Component {

render() {
        if  (this.props.type === "yn") {
		return (
			<div>
			<RaisedButton label="no" />
			<RaisedButton label="yes" />
			</div>
		);
        } else if (this.props.type === "imgup") {
		return (
			<div>
			<RaisedButton label="ok" />
			</div>
		);
        } else if (this.props.type === "text") {
		return (
			<div>
			<TextField />
			<RaisedButton label="ok" />
			</div>
		);

        } else if (this.props.type === "sign") {
		return (
			<div>
			<Toggle />
			<RaisedButton label="Accept" />
			</div>
		);
        } else {
                return(
			<div>
			<RaisedButton label="ok" />
			</div>
		);
        }


	}
}

export default CardSelection;
