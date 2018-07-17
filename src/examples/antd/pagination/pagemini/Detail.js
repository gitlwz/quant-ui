import React, { Component } from 'react';
import { Pagination } from 'quant-ui';

function showTotal(total) {
	return `Total` +total +`sitems`;
}

class Detail extends Component {

	render() {
		return (
			<div>
				<Pagination size="small" total={50} />
				<Pagination size="small" total={50} showSizeChanger showQuickJumper />
				<Pagination size="small" total={50} showTotal={showTotal} />
			</div>
		);
	}
}
export default Detail;
