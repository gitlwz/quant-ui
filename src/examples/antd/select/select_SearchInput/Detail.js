import React, { Component } from 'react';
import { Select } from 'quant-ui';

import querystring from 'querystring';

const Option = Select.Option;

let timeout;
let currentValue;



class SearchInput extends React.Component {
	state = {
		data: [],
		value: '',
	}

	handleSearch = (value) => {
		fetch(value, data => this.setState({ data }));
	}

	handleChange = (value) => {
		this.setState({ value });
	}

	render() {
		const options = this.state.data.map(d => <Option key={d.value}>{d.text}</Option>);
		return (
			<Select
				showSearch
				value={this.state.value}
				placeholder={this.props.placeholder}
				style={this.props.style}
				defaultActiveFirstOption={false}
				showArrow={false}
				filterOption={false}
				onSearch={this.handleSearch}
				onChange={this.handleChange}
				notFoundContent={null}
			>
				{options}
			</Select>
		);
	}
}
class Detail extends Component {

	render() {
		return (
			<SearchInput placeholder="input search text" style={{ width: 200 }} />
		);
	}
}

export default Detail;
