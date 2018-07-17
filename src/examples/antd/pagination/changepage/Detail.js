import React, { Component } from 'react';
import { Pagination } from 'quant-ui';

function onShowSizeChange(current, pageSize) {
	console.log(current, pageSize);
}
class Detail extends Component {

	render() {
		return (
			<Pagination showSizeChanger onShowSizeChange={onShowSizeChange} defaultCurrent={3} total={500} />
		);
	}
}
export default Detail;
