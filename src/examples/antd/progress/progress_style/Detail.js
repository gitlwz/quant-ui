import React, { Component } from 'react';
import { Progress } from 'quant-ui';

class Detail extends Component {

	render() {
		return (
			<div>
				<Progress type="circle" percent={75} format={percent => percent + 'Days'} />
				<Progress type="circle" percent={100} format={() => 'Done'} />
			</div>
		);
	}
}
export default Detail;
