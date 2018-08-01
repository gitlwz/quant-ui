import React, { Component } from 'react';
import {Alert , Authorized} from 'quant-ui';
const Authorizeds = Authorized('user');
const noMatch = <Alert message="No permission." type="error" showIcon />;
class Detail extends Component {
	render() {
		return (
			<div>
				<Authorizeds authority="admin" noMatch={noMatch}>
					<Alert message="user Passed!" type="success" showIcon />
				</Authorizeds>
                <br/>
                <Authorizeds authority="user" noMatch={noMatch}>
					<Alert message="user Passed!" type="success" showIcon />
				</Authorizeds>
			</div>
		);
	}
}
export default Detail;
