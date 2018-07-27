import React, { Component } from 'react';
import {utils} from 'quant-ui';
const {currency} = utils
class Detail extends Component {
	render() {
		console.log('88888888888',currency(122,{ precision: undefined }).format())
		return (
			<div>
				<h2>currency方法主要用于处理精度损失</h2>
				
			</div>
		);
	}
}
export default Detail;
