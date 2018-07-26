import React, { Component } from 'react';
import { Tooltip, Progress } from 'quant-ui';

class Detail extends Component {

	render() {
		return (
			<Tooltip title="3 done / 3 in progress / 4 to do">
				<Progress percent={60} successPercent={30} />
			</Tooltip>
		);
	}
}
export default Detail;
