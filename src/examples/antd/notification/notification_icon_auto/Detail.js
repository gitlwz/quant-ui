import React, { Component } from 'react';
import { Button, notification,Icon } from 'quant-ui';

const openNotification = () => {
	notification.open({
		message: 'Notification Title',
		description: 'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
		icon: <Icon type="smile-circle" style={{ color: '#108ee9' }} />,
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
