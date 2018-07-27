import React, { Component } from 'react';
import { Switch, Icon } from 'quant-ui';

class Detail extends Component {
	render() {
		return (
			<div>
				<Switch checkedChildren="开" unCheckedChildren="关" defaultChecked />
				<br /><br />
				<Switch checkedChildren="1" unCheckedChildren="0" />
				<br /><br />
				<Switch checkedChildren={<Icon type="check" />} unCheckedChildren={<Icon type="cross" />} defaultChecked />
			</div>
		);
	}
}

export default Detail;
