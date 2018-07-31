import React, { Component } from 'react';
import { TagSelect  } from 'quant-ui';

function handleFormSubmit(checkedValue) {
	console.log(checkedValue);
}

class Detail extends Component {

	render() {
		return (
			<TagSelect onChange={handleFormSubmit}>
				<TagSelect.Option value="cat1">类目一</TagSelect.Option>
				<TagSelect.Option value="cat2">类目二</TagSelect.Option>
				<TagSelect.Option value="cat3">类目三</TagSelect.Option>
				<TagSelect.Option value="cat4">类目四</TagSelect.Option>
				<TagSelect.Option value="cat5">类目五</TagSelect.Option>
				<TagSelect.Option value="cat6">类目六</TagSelect.Option>
			</TagSelect>
		);
	}
}
export default Detail;
