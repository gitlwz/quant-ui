import React, { Component } from 'react';
import { Modal, Button } from 'quant-ui';


function success() {
	const modal = Modal.success({
		title: 'This is a notification message',
		content: 'This modal will be destroyed after 1 second',
	});
	setTimeout(() => modal.destroy(), 1000);
}

class Detail extends Component {
	render() {
		return (
			<Button onClick={success}>Success</Button>
		);
	}
}
export default Detail;
