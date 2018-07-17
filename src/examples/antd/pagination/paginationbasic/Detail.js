import React, { Component } from 'react';
import { Pagination } from 'quant-ui';

class Detail extends Component {

	render() {
		return (
			<Pagination defaultCurrent={1} total={50} />
		);
	}
}
export default Detail;
