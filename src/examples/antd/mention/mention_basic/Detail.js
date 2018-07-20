import React, { Component } from 'react';
import { Mention  } from 'quant-ui';

const { toString, toContentState } = Mention;

function onChange(contentState) {
  	console.log(toString(contentState));
}

function onSelect(suggestion) {
  	console.log('onSelect', suggestion);
}
class Detail extends Component {
	render() {
		
		return (
			<Mention
				style={{ width: '100%' }}
				onChange={onChange}
				defaultValue={toContentState('@afc163')}
				suggestions={['afc163', 'benjycui', 'yiminghe', 'RaoHai', '中文', 'にほんご']}
				onSelect={onSelect}
			/>
		);
	}
}
	
export default Detail;
