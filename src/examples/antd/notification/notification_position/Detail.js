import React, { Component } from 'react';
import { Button, Select, notification } from 'quant-ui';

const { Option } = Select;
const options = ['topLeft', 'topRight', 'bottomLeft', 'bottomRight'];
const openNotification = () => {
	notification.open({
		message: 'Notification Title',
		description: 'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
	});
};

class Detail extends Component {
	render() {
		return (
			<div>
				<Select
					defaultValue="topRight"
					style={{ width: 120, marginRight: 10 }}
					onChange={(val) => {
						notification.config({
							placement: val,
						});
					}}
				>
					{options.map(val => <Option key={val} value={val}>{val}</Option>)}
				</Select>
				<Button
					type="primary"
					onClick={openNotification}
				>
					Open the notification box
    			</Button>
			</div>
		);
	}
}
export default Detail;
