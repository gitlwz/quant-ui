import React, { Component } from 'react';
import { Ellipsis } from 'quant-ui';


const article = 'There were injuries alleged in three cases in 2015, and a fourth incident in September, according to the safety recall report. After meeting with US regulators in October, the firm decided to issue a voluntary recall.';
class Detail extends Component {

	render() {
		return (
			<div>
				<Ellipsis length={100}>{article}</Ellipsis>
				<h4 style={{ marginTop: 24 }}>Show Tooltip</h4>
				<Ellipsis length={100} tooltip>{article}</Ellipsis>
			</div>
		);
	}
}
export default Detail;
