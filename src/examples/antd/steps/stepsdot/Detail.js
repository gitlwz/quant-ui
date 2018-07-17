import React, { Component } from 'react';
import { Steps, Icon } from 'quant-ui';

const Step = Steps.Step;

class Detail extends Component {

	render() {
		return (
			<Steps progressDot current={1}>
				<Step title="Finished" description="This is a description." />
				<Step title="In Progress" description="This is a description." />
				<Step title="Waiting" description="This is a description." />
			</Steps>
		);
	}
}
export default Detail;
