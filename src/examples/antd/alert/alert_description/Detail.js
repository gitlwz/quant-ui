import React, { Component } from 'react';
import { Alert } from 'quant-ui';

class Detail extends Component {

	render() {
		return (
			<div>
				<Alert
					message="Success Text"
					description="Success Description Success Description Success Description"
					type="success"
				/>
				<br />
				<Alert
					message="Info Text"
					description="Info Description Info Description Info Description Info Description"
					type="info"
				/>
				<br />
				<Alert
					message="Warning Text"
					description="Warning Description Warning Description Warning Description Warning Description"
					type="warning"
				/>
				<br />
				<Alert
					message="Error Text"
					description="Error Description Error Description Error Description Error Description"
					type="error"
				/>
			</div>
		);
	}
}
export default Detail;
