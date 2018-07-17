import React, { Component } from 'react';
import { Pagination } from 'quant-ui';

class Detail extends Component {

	render() {
		return (
			<Pagination simple defaultCurrent={2} total={50} />
		);
	}
}
export default Detail;
