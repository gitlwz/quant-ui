import React, { Component } from 'react';
import { TimePicker } from 'quant-ui';
import moment from 'moment';

class Detail extends Component {

	render() {
		return (
			<TimePicker minuteStep={15} secondStep={10} />
		);
	}
}

export default Detail;
