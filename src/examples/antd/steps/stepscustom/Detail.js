import React, { Component } from 'react';
import { Steps, Popover } from 'quant-ui';

const Step = Steps.Step;
const customDot = (dot, { status, index }) => (
	<Popover content={<span>step {index} status: {status}</span>}>
		{dot}
	</Popover>
);
class Detail extends Component {

	render() {
		return (
			<Steps current={1} progressDot={customDot}>
				<Step title="Finished" description="You can hover on the dot." />
				<Step title="In Progress" description="You can hover on the dot." />
				<Step title="Waiting" description="You can hover on the dot." />
				<Step title="Waiting" description="You can hover on the dot." />
			</Steps>
		);
	}
}
export default Detail;
