import React, { Component } from 'react';
import { Pagination } from 'quant-ui';

function onChange(pageNumber) {
	console.log('Page: ', pageNumber);
}

class Detail extends Component {

	render() {
		return (
			<Pagination showQuickJumper defaultCurrent={2} total={500} onChange={onChange} />
		);
	}
}
export default Detail;
