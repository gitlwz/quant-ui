import React, { Component } from 'react';
import { Button, Affix } from 'quant-ui';
import { relative, isAbsolute } from 'upath';
class Detail extends Component {
	state = {
		top: 70,
		bottom: 10,
	}
	render() {
		return (
			<div>
				<Affix offsetTop={this.state.top}>
					<Button
						type="primary"
						onClick={() => {
							this.setState({
								top: this.state.top + 10,
							});
						}}
					>
						Affix top
			  		</Button>
				</Affix>
				<br />
				<Affix offsetBottom={this.state.bottom}>
					<Button
						type="primary"
						onClick={() => {
							this.setState({
								bottom: this.state.bottom + 10,
							});
						}}
					>
						Affix bottom
			  </Button>
				</Affix>
			</div>
		);
	}
}
export default Detail;
