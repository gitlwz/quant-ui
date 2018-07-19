import React, { Component } from 'react';
import { Input } from 'quant-ui';
const { TextArea } = Input;
class Detail extends Component {
	render() {
		return (
			<div>
				<TextArea placeholder="Autosize height based on content lines" autosize />
				<div style={{ margin: '24px 0' }} />
				<TextArea placeholder="Autosize height with minimum and maximum number of lines" autosize={{ minRows: 2, maxRows: 6 }} />
			</div>
		);
	}
}
export default Detail;
