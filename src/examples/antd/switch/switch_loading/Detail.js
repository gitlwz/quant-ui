import React, { Component } from 'react';
import { Switch } from 'quant-ui';

class Detail extends Component {

	render() {
		return (
			<div>
				<Switch loading defaultChecked />
				<br /><br />
				<Switch size="small" loading />
			</div>
		);
	}
}

export default Detail;
