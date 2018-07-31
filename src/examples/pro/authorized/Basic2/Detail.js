import React, { Component } from 'react';
import {Alert , Authorized} from 'quant-ui';
const Authorizeds = Authorized('user');
const noMatch = <Alert message="No permission." type="error" showIcon />;
class Detail extends Component {
	render() {
		return (
			<Authorizeds authority={['user', 'admin']} noMatch={noMatch}>
				<Alert message="Use Array as a parameter passed!" type="success" showIcon />
			</Authorizeds>
		);
	}
}
export default Detail;
