import React, { Component } from 'react';
import { Progress } from 'quant-ui';

class Detail extends Component {

	render() {
		return (
			<Progress type="dashboard" percent={75} />
		);
	}
}
export default Detail;
