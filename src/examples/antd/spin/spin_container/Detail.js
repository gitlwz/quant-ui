import React, { Component } from 'react';
import { Spin } from 'quant-ui';
import './style.less';
class Detail extends Component {
	render() {
		return (
			<div className="example">
				<Spin />
			</div>
		);
	}
}
export default Detail;
