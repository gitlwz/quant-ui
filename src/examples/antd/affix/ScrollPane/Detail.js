import React, { Component } from 'react';
import { Button, Affix } from 'quant-ui';
import "./style.less";
class Detail extends Component {

	render() {
		return (
			<div className="scrollable-container" ref={(node) => { this.container = node; }}>
				<div className="background">
					<Affix target={() => this.container}>
						<Button type="primary">
							Fixed at the top of container
						</Button>
					</Affix>
				</div>
			</div>
		);
	}
}
export default Detail;
