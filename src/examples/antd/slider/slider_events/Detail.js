import React, { Component } from 'react';
import { Slider } from 'quant-ui';

function onChange(value) {
	console.log('onChange: ', value);
}

function onAfterChange(value) {
	console.log('onAfterChange: ', value);
}
class Detail extends Component {
	render() {
		return (
			<div>
				<Slider defaultValue={30} onChange={onChange} onAfterChange={onAfterChange} />
				<Slider range step={10} defaultValue={[20, 50]} onChange={onChange} onAfterChange={onAfterChange} />
			</div>
		);
	}
}

export default Detail;
