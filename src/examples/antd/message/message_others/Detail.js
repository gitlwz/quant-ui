import React, { Component } from 'react';
import { message, Button } from 'quant-ui';

const success = () => {
	message.success('This is a message of success');
};

const error = () => {
	message.error('This is a message of error');
};

const warning = () => {
	message.warning('This is message of warning');
};
class Detail extends Component {

	render() {
		return (
			<div>
				<Button onClick={success}>Success</Button>
				&nbsp;
				<Button onClick={error}>Error</Button>
				&nbsp;
				<Button onClick={warning}>Warning</Button>
			</div>
		);
	}
}
export default Detail;
