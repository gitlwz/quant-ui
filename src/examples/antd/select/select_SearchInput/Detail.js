import React, { Component } from 'react';
import { Select } from 'quant-ui';

import jsonp from 'fetch-jsonp';
import querystring from 'querystring';

const Option = Select.Option;

let timeout;
let currentValue;

function fetch(value, callback) {
	if (timeout) {
		clearTimeout(timeout);
		timeout = null;
	}
	currentValue = value;

	function fake() {
		const str = querystring.encode({
			code: 'utf-8',
			q: value,
		});
		jsonp('https://suggest.taobao.com/sug?' + str)
			.then(response => response.json())
			.then((d) => {
				if (currentValue === value) {
					const result = d.result;
					const data = [];
					result.forEach((r) => {
						data.push({
							value: r[0],
							text: r[0],
						});
					});
					callback(data);
				}
			});
	}

	timeout = setTimeout(fake, 300);
}

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
