import React, { Component } from 'react';
import { CountDown } from 'quant-ui';

const targetTime = new Date().getTime() + 3900000;
class Detail extends Component {

	render() {
		return (
			<div>
				 <CountDown style={{ fontSize: 20 }} target={targetTime} />
			</div>
		);
	}
}
export default Detail;
