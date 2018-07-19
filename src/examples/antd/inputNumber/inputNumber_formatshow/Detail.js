import React, { Component } from 'react';
import { InputNumber, Button } from 'quant-ui';

function onChange(value) {
  console.log('changed', value);
}
class Detail extends Component {

	render() {
		return (
			<div>
				<InputNumber
					defaultValue={1000}
					formatter={value => ('$' +value).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
					parser={value => value.replace(/\$\s?|(,*)/g, '')}
					onChange={onChange}
				/>&nbsp;
				<InputNumber
					defaultValue={100}
					min={0}
					max={100}
					formatter={value => value+'%'}
					parser={value => value.replace('%', '')}
					onChange={onChange}
				/>
  			</div>
		);
	}
}
	
export default Detail;
