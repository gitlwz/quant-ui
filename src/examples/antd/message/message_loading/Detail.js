import React, { Component } from 'react';
import { message, Button } from 'quant-ui';

const success = () => {
	const hide = message.loading('Action in progress..', 0);
	// Dismiss manually and asynchronously
	setTimeout(hide, 2500);
};
class Detail extends Component {

	render() {
		return (
			<Button onClick={success}>Display a loading indicator</Button>
		);
	}
}
export default Detail;
