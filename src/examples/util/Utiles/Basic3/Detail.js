import React, { Component } from 'react';
import {utils} from 'quant-ui';
const {throttle} = utils
class Detail extends Component {
	render() {
		return (
			<div>
				<h2>throttle方法函数节流</h2>
				<h2>适用于限制`resize`和`scroll`等函数的调用频率</h2>
			</div>
		);
	}
}
export default Detail;
