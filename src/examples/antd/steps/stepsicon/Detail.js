import React, { Component } from 'react';
import { Steps, Icon } from 'quant-ui';

const Step = Steps.Step;

class Detail extends Component {

	render() {
		return (
			<Steps>
				<Step status="finish" title="Login" icon={<Icon type="user" />} />
				<Step status="finish" title="Verification" icon={<Icon type="solution" />} />
				<Step status="process" title="Pay" icon={<Icon type="loading" />} />
				<Step status="wait" title="Done" icon={<Icon type="smile-o" />} />
			</Steps>
		);
	}
}
export default Detail;
