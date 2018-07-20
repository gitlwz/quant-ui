import React, { Component } from 'react';
import { Mention } from 'quant-ui';

const { toString } = Mention;

function onChange(editorState) {
	console.log(toString(editorState));
}

const users = ['afc163', 'benjycui', 'yiminghe', 'jljsj33', 'dqaria', 'RaoHai'];
class Detail extends Component {
	render() {
		return (
			<div>
				<div style={{ marginBottom: 10 }}>
					<Mention
						style={{ width: '100%' }}
						onChange={onChange}
						placeholder="this is disabled Mention"
						suggestions={users}
						disabled
					/>
				</div>
				<Mention
					style={{ width: '100%' }}
					onChange={onChange}
					placeholder="this is readOnly Mention"
					suggestions={users}
					readOnly
				/>
			</div>
		);
	}
}


export default Detail;
