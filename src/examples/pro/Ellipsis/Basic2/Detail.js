import React, { Component } from 'react';
import { Ellipsis } from 'quant-ui';


const article = <p>There were injuries alleged in three <a href="#cover">cases in 2015</a>, and a fourth incident in September, according to the safety recall report. After meeting with US regulators in October, the firm decided to issue a voluntary recall.</p>;
class Detail extends Component {

	render() {
		return (
			<div style={{ width: 200 }}>
				<Ellipsis tooltip lines={3}>{article}</Ellipsis>
			</div>
		);
	}
}
export default Detail;
