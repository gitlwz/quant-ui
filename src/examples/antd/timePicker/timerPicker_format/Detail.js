import React, { Component } from 'react';
import { TimePicker } from 'quant-ui';
import moment from 'moment';

function onChange(time, timeString) {
	console.log(time, timeString);
}
class Detail extends Component {

	render() {
		return (
			<div>
				<TimePicker use12Hours onChange={onChange} />
				&nbsp;
				<TimePicker use12Hours format="h:mm:ss A" onChange={onChange} />
				&nbsp;
				<TimePicker use12Hours format="h:mm a" onChange={onChange} />
			</div>
		);
	}
}

export default Detail;
