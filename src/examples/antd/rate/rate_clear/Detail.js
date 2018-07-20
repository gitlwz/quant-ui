import React, { Component } from 'react';
import { Rate } from 'quant-ui';

class Detail extends Component {

	render() {
		return (
			<div>
				<Rate defaultValue={3} /> allowClear: true
				<br />
				<Rate allowClear={false} defaultValue={3} /> allowClear: false
		  </div>
		);
	}
}

export default Detail;
