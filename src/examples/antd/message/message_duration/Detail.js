import React, { Component } from 'react';
import { message, Button } from 'quant-ui';

const success = () => {
	message.success('This is a prompt message for success, and it will disappear in 10 seconds', 10);
};
class Detail extends Component {

	render() {
		return (
			<Button onClick={success}>Customized display duration</Button>
		);
	}
}
export default Detail;
