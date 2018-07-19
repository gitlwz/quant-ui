import React, { Component } from 'react';
import { InputNumber } from 'quant-ui';
import './style.less';

function onChange(value) {
	console.log('changed', value);
}
  
class Detail extends Component {
	render() {
		
		return (
			<div>
				<InputNumber size="large" min={1} max={100000} defaultValue={3} onChange={onChange} />&nbsp;
				<InputNumber min={1} max={100000} defaultValue={3} onChange={onChange} />&nbsp;
				<InputNumber size="small" min={1} max={100000} defaultValue={3} onChange={onChange} />&nbsp;
			</div>	
		);
	}
}
	
export default Detail;
