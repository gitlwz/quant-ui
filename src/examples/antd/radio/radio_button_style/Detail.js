import React, { Component } from 'react';
import { Radio } from 'quant-ui';

const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;

function onChange(e) {
	console.log('radio checked:'+e.target.value);
}
class Detail extends Component {
	render() {
		return (
			<div>
				<div>
					<RadioGroup onChange={onChange} defaultValue="a">
						<RadioButton value="a">Hangzhou</RadioButton>
						<RadioButton value="b">Shanghai</RadioButton>
						<RadioButton value="c">Beijing</RadioButton>
						<RadioButton value="d">Chengdu</RadioButton>
					</RadioGroup>
				</div>
				<div style={{ marginTop: 16 }}>
					<RadioGroup onChange={onChange} defaultValue="a">
						<RadioButton value="a">Hangzhou</RadioButton>
						<RadioButton value="b" disabled>Shanghai</RadioButton>
						<RadioButton value="c">Beijing</RadioButton>
						<RadioButton value="d">Chengdu</RadioButton>
					</RadioGroup>
				</div>
				<div style={{ marginTop: 16 }}>
					<RadioGroup disabled onChange={onChange} defaultValue="a">
						<RadioButton value="a">Hangzhou</RadioButton>
						<RadioButton value="b">Shanghai</RadioButton>
						<RadioButton value="c">Beijing</RadioButton>
						<RadioButton value="d">Chengdu</RadioButton>
					</RadioGroup>
				</div>
			</div>
		);
	}
}
export default Detail;
