import React, { Component } from 'react';
import { Button, notification } from 'quant-ui';

const key = 'updatable';

const openNotification = () => {
	notification.open({
		key,
		message: 'Notification Title',
		description: 'description.',
	});
	setTimeout(() => {
		notification.open({
			key,
			message: 'New Title',
			description: 'New description.',
		});
	}, 1000);
};
class Detail extends Component {
	render() {
		return (
			<Button type="primary" onClick={openNotification}>Open the notification box</Button>
		);
	}
}
export default Detail;
