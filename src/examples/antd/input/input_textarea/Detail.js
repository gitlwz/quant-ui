import React, { Component } from 'react';
import { Input } from 'quant-ui';

const { TextArea } = Input;
class Detail extends Component {
	render() {
		return (
			<TextArea rows={4} />
		);
	}
}
export default Detail;
