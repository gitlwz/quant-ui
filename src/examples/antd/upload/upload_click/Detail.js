import React, { Component } from 'react';
import { Upload, message, Button, Icon } from 'quant-ui';


const props = {
	name: 'file',
	action: '//jsonplaceholder.typicode.com/posts/',
	headers: {
		authorization: 'authorization-text',
	},
	onChange(info) {
		if (info.file.status !== 'uploading') {
			console.log(info.file, info.fileList);
		}
		if (info.file.status === 'done') {
			message.success(info.file.name + 'file uploaded successfully');
		} else if (info.file.status === 'error') {
			message.error(info.file.name + 'file upload failed.');
		}
	},
};

class Detail extends Component {
	render() {
		return (
			<Upload {...props}>
				<Button>
					<Icon type="upload" /> Click to Upload
				</Button>
			</Upload>
		);
	}
}

export default Detail;
