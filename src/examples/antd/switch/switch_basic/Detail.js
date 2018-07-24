import React, { Component } from 'react';
import { Switch } from 'quant-ui';

function onChange(checked) {
	console.log('switch to ' + checked);
}
class Detail extends Component {

	render() {
		return (
			<Switch defaultChecked onChange={onChange} />
		);
	}
}

export default Detail;
