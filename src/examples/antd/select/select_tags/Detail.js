import React, { Component } from 'react';
import { Select } from 'quant-ui';

const Option = Select.Option;

const children = [];
for (let i = 10; i < 36; i++) {
	children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);
}

function handleChange(value) {
	console.log('selected' +value);
}

class Detail extends Component {

	render() {
		return (
			<Select
				mode="tags"
				style={{ width: '100%' }}
				placeholder="Tags Mode"
				onChange={handleChange}
			>
				{children}
			</Select>
		);
	}
}

export default Detail;
