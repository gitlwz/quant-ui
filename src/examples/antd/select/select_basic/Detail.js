import React, { Component } from 'react';
import { Select } from 'quant-ui';

const Option = Select.Option;

function handleChange(value) {
	console.log('selected'+ value);
}

class Detail extends Component {

	render() {
		return (
			<div >
				<Select defaultValue="lucy" style={{ width: 120 }} onChange={handleChange}>
					<Option value="jack">Jack</Option>
					<Option value="lucy">Lucy</Option>
					<Option value="disabled" disabled>Disabled</Option>
					<Option value="Yiminghe">yiminghe</Option>
				</Select>
				<Select defaultValue="lucy" style={{ width: 120 }} disabled>
					<Option value="lucy">Lucy</Option>
				</Select>
			</div >
		);
	}
}

export default Detail;
