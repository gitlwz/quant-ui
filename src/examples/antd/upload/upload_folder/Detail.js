import React, { Component } from 'react';
import { Upload, Button, Icon } from 'quant-ui';

class Detail extends Component {
	render() {
		return (
			<Upload action="//jsonplaceholder.typicode.com/posts/" directory>
				<Button>
					<Icon type="upload" /> Upload Directory
				</Button>
			</Upload>
		);
	}
}

export default Detail;
