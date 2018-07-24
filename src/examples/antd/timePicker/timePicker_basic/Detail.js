import React, { Component } from 'react';
import { TimePicker } from 'quant-ui';
import moment from 'moment';

function onChange(time, timeString) {
	console.log(time, timeString);
}

class Detail extends Component {

	render() {
		return (
			<TimePicker onChange={onChange} defaultOpenValue={moment('00:00:00', 'HH:mm:ss')} />
		);
	}
}

export default Detail;
