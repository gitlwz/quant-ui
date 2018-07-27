import React, { Component } from 'react';
import { message, Button } from 'quant-ui';

const success = () => {
	message.loading('Action in progress..', 2.5)
		.then(() => message.success('Loading finished', 2.5))
		.then(() => message.info('Loading finished is finished', 2.5));
};

class Detail extends Component {

	render() {
		return (
			<Button onClick={success}>Display a sequence of message</Button>
		);
	}
}
export default Detail;
