import React, { Component } from 'react';
import { Alert } from 'quant-ui';

const onClose = function (e) {
	console.log(e, 'I was closed.');
};
class Detail extends Component {

	render() {
		return (
			<div>
				<Alert
					message="Warning Text Warning Text Warning TextW arning Text Warning Text Warning TextWarning Text"
					type="warning"
					closable
					onClose={onClose}
				/>
				<br />
				<Alert
					message="Error Text"
					description="Error Description Error Description Error Description Error Description Error Description Error Description"
					type="error"
					closable
					onClose={onClose}
				/>
			</div>
		);
	}
}
export default Detail;
