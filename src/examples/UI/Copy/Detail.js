import React, { Component } from 'react';
import { copy,Button } from 'quant-ui';
import data from './api.js';
import Code from '../../Code.js';
class CopyCode extends Component {
	copyClick = () =>{
		copy("复制的内容")
	}
	render() {
		return (
			<div>
				<Button onClick={this.copyClick}>复制</Button>
				<Code code={data.code}/>
			</div>
		);
	}
}

export default CopyCode;
