import React, { Component } from 'react';
import { Rate } from 'quant-ui';

class Detail extends Component {
	state = {
		value: 3,
	}

	handleChange = (value) => {
		this.setState({ value });
	}

	render() {
		const { value } = this.state;
		return (
			<span>
				<Rate onChange={this.handleChange} value={value} />
				{value && <span className="ant-rate-text">{value} stars</span>}
			</span>
		);
	}
}


export default Detail;
