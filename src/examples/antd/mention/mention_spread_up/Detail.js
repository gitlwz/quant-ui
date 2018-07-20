import React, { Component } from 'react';
import { Mention } from 'quant-ui';

const { toString } = Mention;

function onChange(contentState) {
	console.log(toString(contentState));
}

function onSelect(suggestion) {
	console.log('onSelect', suggestion);
}
class Detail extends Component {
	render() {

		return (
			<div>
				<br /><br /><br /><br /><br /><br /><br />
				<Mention
					style={{ width: '100%' }}
					onChange={onChange}
					suggestions={['afc163', 'benjycui', 'yiminghe', 'RaoHai', '中文', 'にほんご']}
					onSelect={onSelect}
					placement="top"
				/>
			</div>
		);
	}
}

export default Detail;
