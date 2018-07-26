import React, { Component } from 'react';
import { Spin, Alert } from 'quant-ui';

class Detail extends Component {

	render() {
		return (
			<Spin tip="Loading...">
				<Alert
					message="Alert message title"
					description="Further details about the context of this alert."
					type="info"
				/>
			</Spin>
		);
	}
}
export default Detail;
