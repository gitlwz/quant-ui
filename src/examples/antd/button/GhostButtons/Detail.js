import React, { Component } from 'react';
import { Button, Icon } from 'quant-ui';
class Detail extends Component {
	render() {
		return (
			<div style={{ background: 'rgb(190, 200, 200)', padding: '26px 16px 16px' }}>
				<Button type="primary" ghost>Primary</Button>&nbsp;
				<Button ghost>Default</Button>&nbsp;
				<Button type="dashed" ghost>Dashed</Button>&nbsp;
				<Button type="danger" ghost>danger</Button>&nbsp;
			</div>
		);
	}
}
export default Detail;
