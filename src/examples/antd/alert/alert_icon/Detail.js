import React, { Component } from 'react';
import { Alert } from 'quant-ui';

class Detail extends Component {

	render() {
		return (
			<div>
				<Alert message="Success Tips" type="success" showIcon />
				<br />
				<Alert message="Informational Notes" type="info" showIcon />
				<br />
				<Alert message="Warning" type="warning" showIcon />
				<br />
				<Alert message="Error" type="error" showIcon />
				<br />
				<Alert
					message="Success Tips"
					description="Detailed description and advices about successful copywriting."
					type="success"
					showIcon
				/>
				<br />
				<Alert
					message="Informational Notes"
					description="Additional description and informations about copywriting."
					type="info"
					showIcon
				/>
				<br />
				<Alert
					message="Warning"
					description="This is a warning notice about copywriting."
					type="warning"
					showIcon
				/>
				<br />
				<Alert
					message="Error"
					description="This is an error message about copywriting."
					type="error"
					showIcon
				/>
			</div>
		);
	}
}
export default Detail;
