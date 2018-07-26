import React, { Component } from 'react';
import { Spin } from 'quant-ui';

class Detail extends Component {
	render() {
		return (
			<div>
				<Spin size="small" />
				<Spin />
				<Spin size="large" />
			</div>
		);
	}
}
export default Detail;
