import React, { Component } from 'react';
import { Pagination } from 'quant-ui';

class Detail extends Component {

	render() {
		return (
			<Pagination defaultCurrent={6} total={500} />
		);
	}
}
export default Detail;
