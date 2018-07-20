import React, { Component } from 'react';
import { Mention, Form, Button } from 'quant-ui';

const { toString } = Mention;

function onChange(editorState) {
	console.log(toString(editorState));
}
class Detail extends Component {
	render() {

		return (
			<Mention
				style={{ width: '100%', height: 100 }}
				onChange={onChange}
				suggestions={['afc163', 'benjycui', 'yiminghe', 'jljsj33', 'dqaria', 'RaoHai']}
				multiLines
			/>
		);
	}
}

export default Detail;
