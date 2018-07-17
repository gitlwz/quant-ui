import React, { Component } from 'react';
import { Pagination } from 'quant-ui';

class Detail extends Component {
	state = {
		current: 3,
	}

	onChange = (page) => {
		console.log(page);
		this.setState({
			current: page,
		});
	}

	render() {
		return <Pagination current={this.state.current} onChange={this.onChange} total={50} />;
	}
}
export default Detail;
