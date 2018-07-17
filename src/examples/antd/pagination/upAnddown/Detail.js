import React, { Component } from 'react';
import { Pagination } from 'quant-ui';

function itemRender(current, type, originalElement) {
	if (type === 'prev') {
		return <a>Previous</a>;
	}
	if (type === 'next') {
		return <a>Next</a>;
	}
	return originalElement;
}

class Detail extends Component {

	render() {
		return (
			<Pagination total={500} itemRender={itemRender} />
		);
	}
}
export default Detail;
