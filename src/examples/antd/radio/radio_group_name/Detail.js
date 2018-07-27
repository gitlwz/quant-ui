import React, { Component } from 'react';
import { Radio } from 'quant-ui';

const RadioGroup = Radio.Group;
class Detail extends Component {
	render() {
		return (
			<RadioGroup name="radiogroup" defaultValue={1}>
				<Radio value={1}>A</Radio>
				<Radio value={2}>B</Radio>
				<Radio value={3}>C</Radio>
				<Radio value={4}>D</Radio>
			</RadioGroup>
		);
	}
}
export default Detail;
