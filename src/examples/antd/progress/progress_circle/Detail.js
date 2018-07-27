import React, { Component } from 'react';
import { Progress } from 'quant-ui';

class Detail extends Component {
	render() {
		return (
			<div>
				<Progress type="circle" percent={75} />
				<Progress type="circle" percent={70} status="exception" />
				<Progress type="circle" percent={100} />
			</div>
		);
	}
}
export default Detail;
