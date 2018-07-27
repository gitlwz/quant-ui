import React, { Component } from 'react';
import { Spin, Icon } from 'quant-ui';


const antIcon = <Icon type="loading" style={{ fontSize: 24 }} spin />;
class Detail extends Component {
	render() {
		return (
			<Spin indicator={antIcon} />
		);
	}
}

export default Detail;
