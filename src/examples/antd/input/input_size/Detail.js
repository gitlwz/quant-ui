import React, { Component } from 'react';
import { Input } from 'quant-ui';
import './style.less';
class Detail extends Component {
	render() {
		return (
			<div className="example-input">
    			<Input size="large" placeholder="large size" />
   				<Input placeholder="default size" />
   				<Input size="small" placeholder="small size" />
  			</div>
		);
	}
}
export default Detail;
