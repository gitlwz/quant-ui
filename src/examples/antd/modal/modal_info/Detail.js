import React, { Component } from 'react';
import { Modal, Button } from 'quant-ui';

function info() {
	Modal.info({
		title: 'This is a notification message',
		content: (
			<div>
				<p>some messages...some messages...</p>
				<p>some messages...some messages...</p>
			</div>
		),
		onOk() { },
	});
}

function success() {
	Modal.success({
		title: 'This is a success message',
		content: 'some messages...some messages...',
	});
}

function error() {
	Modal.error({
		title: 'This is an error message',
		content: 'some messages...some messages...',
	});
}

function warning() {
	Modal.warning({
		title: 'This is a warning message',
		content: 'some messages...some messages...',
	});
}

class Detail extends Component {
	render() {
		return (
			<div>
				<Button onClick={info}>Info</Button>&nbsp;
				<Button onClick={success}>Success</Button>&nbsp;
				<Button onClick={error}>Error</Button>&nbsp;
				<Button onClick={warning}>Warning</Button>&nbsp;
			</div>
		);
	}
}
export default Detail;
