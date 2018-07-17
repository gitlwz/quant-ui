import React, { Component } from 'react';
import { Steps } from 'quant-ui';

const Step = Steps.Step;

class Detail extends Component {

	render() {
		return (
			<Steps current={1} status="error">
				<Step title="Finished" description="This is a description" />
				<Step title="In Process" description="This is a description" />
				<Step title="Waiting" description="This is a description" />
			</Steps>
		);
	}
}
export default Detail;
