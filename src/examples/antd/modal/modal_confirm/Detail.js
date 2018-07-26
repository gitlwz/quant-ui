import React, { Component } from 'react';
import { Modal, Button } from 'quant-ui';

const confirm = Modal.confirm;

function showConfirm() {
	confirm({
		title: 'Do you Want to delete these items?',
		content: 'Some descriptions',
		onOk() {
			console.log('OK');
		},
		onCancel() {
			console.log('Cancel');
		},
	});
}

function showDeleteConfirm() {
	confirm({
		title: 'Are you sure delete this task?',
		content: 'Some descriptions',
		okText: 'Yes',
		okType: 'danger',
		cancelText: 'No',
		onOk() {
			console.log('OK');
		},
		onCancel() {
			console.log('Cancel');
		},
	});
}
class Detail extends Component {
	render() {
		return (
			<div>
				<Button onClick={showConfirm}>
					Confirm
    			</Button>
				&nbsp;
				<Button onClick={showDeleteConfirm} type="dashed">
					Delete
    			</Button>
			</div>
		);
	}
}
export default Detail;
