import React, { Component } from 'react';
import { message, Button } from 'quant-ui';

const info = () => {
	message.info('This is a normal message');
};
class Detail extends Component {

	render() {
		return (
			<Button type="primary" onClick={info}>Display normal message</Button>
		);
	}
}
export default Detail;
