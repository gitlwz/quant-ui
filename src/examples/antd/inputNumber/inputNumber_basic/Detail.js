import React, { Component } from 'react';
import { InputNumber } from 'quant-ui';

function onChange(value) {
	console.log('changed', value);
}
class Detail extends Component {
	render() {
		
		return (
			<InputNumber min={1} max={10} defaultValue={3} onChange={onChange} />	
		);
	}
}
	
export default Detail;
