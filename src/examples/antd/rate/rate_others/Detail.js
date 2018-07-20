import React, { Component } from 'react';
import { Rate, Icon } from 'quant-ui';

class Detail extends Component {

	render() {
		return (
			<div>
				<Rate character={<Icon type="heart" />} allowHalf />
				<br />
				<Rate character="A" allowHalf style={{ fontSize: 36 }} />
				<br />
				<Rate character="好" allowHalf />
			</div>
		);
	}
}

export default Detail;
