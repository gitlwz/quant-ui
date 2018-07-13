import React, { Component } from 'react';
import { Button } from 'quant-ui';
class Detail extends Component {

	render() {
		return (
			<div>
				<Button type="primary">Primary</Button> &nbsp;
				<Button type="primary" disabled>Primary(disabled)</Button>
				<br /><br />
				<Button>Default</Button>  &nbsp;
				<Button disabled>Default(disabled)</Button>
				<br /><br />
				<Button type="dashed">Dashed</Button>  &nbsp;
				<Button type="dashed" disabled>Dashed(disabled)</Button>
				<div style={{ padding: '8px 8px 0 8px', background: 'rgb(190, 200, 200)' }}>
					<Button ghost>Ghost</Button>  &nbsp;
					<Button ghost disabled>Ghost(disabled)</Button>
				</div>
			</div>
		);
	}
}
export default Detail;
