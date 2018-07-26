import React, { Component } from 'react';
import { Progress } from 'quant-ui';

class Detail extends Component {
	render() {
		return (
			<div>
				<Progress type="circle" percent={30} width={80} />
				<Progress type="circle" percent={70} width={80} status="exception" />
				<Progress type="circle" percent={100} width={80} />
			</div>
		);
	}
}
export default Detail;
