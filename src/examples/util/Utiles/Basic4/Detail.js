import React, { Component } from 'react';
import {utils} from 'quant-ui';
const {currency} = utils
class Detail extends Component {
	render() {
		return (
			<div>
				<h2>debounce函数防抖 </h2>
				<h2>与throttle不同的是，debounce保证一个函数在多少毫秒内不再被触发，只会执行一次 </h2>
			</div>
		);
	}
}
export default Detail;
