import React, { Component } from 'react';
import { Modal, Button } from 'quant-ui';

const confirm = Modal.confirm;

function showConfirm() {
	confirm({
		title: 'Do you want to delete these items?',
		content: 'When clicked the OK button, this dialog will be closed after 1 second',
		onOk() {
			return new Promise((resolve, reject) => {
				setTimeout(Math.random() > 0.5 ? resolve : reject, 1000);
			}).catch(() => console.log('Oops errors!'));
		},
		onCancel() { },
	});
}
class Detail extends Component {
	render() {
		return (
			<Button onClick={showConfirm}>
				Confirm
  			</Button>
		);
	}
}
export default Detail;
