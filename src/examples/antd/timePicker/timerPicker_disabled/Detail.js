import React, { Component } from 'react';
import { TimePicker } from 'quant-ui';
import moment from 'moment';

class Detail extends Component {

	render() {
		return (
			<TimePicker defaultValue={moment('12:08:23', 'HH:mm:ss')} disabled />
		);
	}
}

export default Detail;
