import React, { Component } from 'react';
import { TimePicker } from 'quant-ui';
import moment from 'moment';

const format = 'HH:mm';
class Detail extends Component {

	render() {
		return (
			<TimePicker defaultValue={moment('12:08', format)} format={format} />
		);
	}
}

export default Detail;
