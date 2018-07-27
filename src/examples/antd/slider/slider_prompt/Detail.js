import React, { Component } from 'react';
import { Slider } from 'quant-ui';

function formatter(value) {
	return value + '%';
}
class Detail extends Component {
	render() {
		return (
			<div>
				<Slider tipFormatter={formatter} />
				<Slider tipFormatter={null} />
			</div>
		);
	}
}

export default Detail;
