import React, { Component } from 'react';
import { Modal, Button } from 'quant-ui';


class Detail extends Component {
	state = { visible: false }

	showModal = () => {
		this.setState({
			visible: true,
		});
	}

	handleOk = (e) => {
		console.log(e);
		this.setState({
			visible: false,
		});
	}

	handleCancel = (e) => {
		console.log(e);
		this.setState({
			visible: false,
		});
	}

	render() {
		return (
			<div>
				<Button type="primary" onClick={this.showModal}>Open</Button>
				<Modal
					title="Basic Modal"
					visible={this.state.visible}
					onOk={this.handleOk}
					onCancel={this.handleCancel}
					okButtonProps={{ disabled: true }}
					cancelButtonProps={{ disabled: true }}
				>
					<p>Some contents...</p>
					<p>Some contents...</p>
					<p>Some contents...</p>
				</Modal>
			</div>
		);
	}
}

export default Detail;
