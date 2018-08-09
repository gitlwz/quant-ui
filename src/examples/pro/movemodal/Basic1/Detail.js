import React, { Component } from 'react';
import {  Button,MoveModal } from 'quant-ui';

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
				<MoveModal
					title="MoveModal"
					visible={this.state.visible}
                    onOk={this.handleOk}
					onCancel={this.handleCancel}
				>
					<p>Some contents...</p>
					<p>Some contents...</p>
					<p>Some contents...</p>
				</MoveModal>
			</div>
		);
	}
}
export default Detail;
