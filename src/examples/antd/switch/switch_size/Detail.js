import React, { Component } from 'react';
import { Switch } from 'quant-ui';

class Detail extends Component {

	render() {
		return (
			<div>
				<Switch defaultChecked />
				<br /><br />
				<Switch size="small" defaultChecked />
			</div>
		);
	}
}

export default Detail;
