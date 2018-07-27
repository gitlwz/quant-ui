import React, { Component } from 'react';
import { Button, notification } from 'quant-ui';

const openNotificationWithIcon = (type) => {
	notification[type]({
		message: 'Notification Title',
		description: 'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
	});
};

class Detail extends Component {
	render() {
		return (
			<div>
				<Button onClick={() => openNotificationWithIcon('success')}>Success</Button>
				&nbsp;
				<Button onClick={() => openNotificationWithIcon('info')}>Info</Button>
				&nbsp;
				<Button onClick={() => openNotificationWithIcon('warning')}>Warning</Button>
				&nbsp;
				<Button onClick={() => openNotificationWithIcon('error')}>Error</Button>
			</div>
		);
	}
}
export default Detail;
