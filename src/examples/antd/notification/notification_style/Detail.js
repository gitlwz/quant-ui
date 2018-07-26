import React, { Component } from 'react';
import { Button, notification } from 'quant-ui';

const openNotification = () => {
	notification.open({
		message: 'Notification Title',
		description: 'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
		style: {
			width: 600,
			marginLeft: 335 - 600,
		},
	});
};

class Detail extends Component {
	render() {
		return (
			<Button type="primary" onClick={openNotification}>Open the notification box</Button>
		);
	}
}
export default Detail;
