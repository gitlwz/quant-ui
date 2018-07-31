import React, { Component } from 'react';
import {Alert , Authorized} from 'quant-ui';
const Authorizeds = Authorized('user');
const noMatch = <Alert message="No permission." type="error" showIcon />;

const havePermission = () => {
  return false;
};
class Detail extends Component {
	render() {
		return (
			<Authorizeds authority={havePermission} noMatch={noMatch}>
				<Alert
				message="Use Function as a parameter passed!"
				type="success"
				showIcon
				/>
			</Authorizeds>
		);
	}
}
export default Detail;
