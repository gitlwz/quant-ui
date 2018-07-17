import React, { Component } from 'react';
import { AutoComplete, Input } from 'quant-ui';

const dataSource = ['Burns Bay Road', 'Downing Street', 'Wall Street'];

class Detail extends Component {

	render() {

		return (
			<AutoComplete
				style={{ width: 200 }}
				dataSource={dataSource}
				placeholder="try to type `b`"
				filterOption={(inputValue, option) => option.props.children.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1}
			/>
		);
	}
}

export default Detail;
