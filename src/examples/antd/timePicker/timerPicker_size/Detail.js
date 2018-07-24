import React, { Component } from 'react';
import { TimePicker } from 'quant-ui';
import moment from 'moment';

class Detail extends Component {

	render() {
		return (
			<div>
				<TimePicker defaultValue={moment('12:08:23', 'HH:mm:ss')} size="large" />
				&nbsp;
				<TimePicker defaultValue={moment('12:08:23', 'HH:mm:ss')} />
				&nbsp;
				<TimePicker defaultValue={moment('12:08:23', 'HH:mm:ss')} size="small" />
				&nbsp;
			</div>
		);
	}
}

export default Detail;
