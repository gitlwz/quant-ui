import React, { Component } from 'react';
import { Button, Icon } from 'quant-ui';
class Detail extends Component {
	render() {
		const ButtonGroup = Button.Group;
		return (
			<div>
				<h4>Basic</h4>
				<ButtonGroup>
					<Button>Cancel</Button>
					<Button>OK</Button>
				</ButtonGroup>
				&nbsp;
			<ButtonGroup>
					<Button disabled>L</Button>
					<Button disabled>M</Button>
					<Button disabled>R</Button>
				</ButtonGroup>
				<br /><br />
				<ButtonGroup>
					<Button>L</Button>
					<Button>M</Button>
					<Button>R</Button>
				</ButtonGroup>

				<h4>With Icon</h4>
				<ButtonGroup>
					<Button type="primary">
						<Icon type="left" />Go back
			  </Button>
					<Button type="primary">
						Go forward<Icon type="right" />
					</Button>
				</ButtonGroup>
				&nbsp;
			<ButtonGroup>
					<Button type="primary" icon="cloud" />
					<Button type="primary" icon="cloud-download" />
				</ButtonGroup>
			</div>
		);
	}
}
export default Detail;
