import React, { Component } from 'react';
import { Steps } from 'quant-ui';

const Step = Steps.Step;

class Detail extends Component {

	render() {
		return (
			<Steps size="small" current={1}>
				<Step title="Finished" />
				<Step title="In Progress" />
				<Step title="Waiting" />
			</Steps>
		);
	}
}
export default Detail;
