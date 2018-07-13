import React, { Component } from 'react';
import { Button } from 'quant-ui';
class Detail extends Component {
	state = {
		loading: false,
		iconLoading: false,
	  }
	
	  enterLoading = () => {
		this.setState({ loading: true });
	  }
	
	  enterIconLoading = () => {
		this.setState({ iconLoading: true });
	  }
	
	  render() {
		return (
		  <span>
			<Button type="primary" loading>
			  Loading
			</Button> &nbsp;
			<Button type="primary" size="small" loading>
			  Loading
			</Button> &nbsp;
			<br /><br />
			<Button type="primary" loading={this.state.loading} onClick={this.enterLoading}>
			  Click me!
			</Button> &nbsp;
			<Button type="primary" icon="poweroff" loading={this.state.iconLoading} onClick={this.enterIconLoading}>
			  Click me!
			</Button> &nbsp;
			<br /><br />
			<Button shape="circle" loading /> &nbsp;
			<Button type="primary" shape="circle" loading />
		  </span>
		);
	  }
	}
export default Detail;
