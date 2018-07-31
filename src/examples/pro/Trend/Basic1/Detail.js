import React, { Component } from 'react';
import { Trend  } from 'quant-ui';

const targetTime = new Date().getTime() + 3900000;
class Detail extends Component {

	render() {
		return (
			<div>
				<Trend flag="up">12%</Trend>
				<Trend flag="down" style={{ marginLeft: 8 }}>11%</Trend>
			</div>
		);
	}
}
export default Detail;
