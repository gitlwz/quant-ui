const code = `
import React, { Component } from 'react';
import { copy,Button } from 'quant-ui';
class CopyCode extends Component {
	copyClick = () =>{
		copy("复制的内容")
	}
	render() {
		return (
			<div>
				<Button onClick={this.copyClick}>复制</Button>
			</div>
		);
	}
}
export default CopyCode;
`;
const api = [
	
];

export default {
	code,
	api
}