import React, { Component } from 'react';
import { Radio } from 'quant-ui';

const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;
class Detail extends Component {
	render() {
		return (
			<div>
				<div>
					<RadioGroup defaultValue="a" size="large">
						<RadioButton value="a">Hangzhou</RadioButton>
						<RadioButton value="b">Shanghai</RadioButton>
						<RadioButton value="c">Beijing</RadioButton>
						<RadioButton value="d">Chengdu</RadioButton>
					</RadioGroup>
				</div>
				<div style={{ marginTop: 16 }}>
					<RadioGroup defaultValue="a">
						<RadioButton value="a">Hangzhou</RadioButton>
						<RadioButton value="b">Shanghai</RadioButton>
						<RadioButton value="c">Beijing</RadioButton>
						<RadioButton value="d">Chengdu</RadioButton>
					</RadioGroup>
				</div>
				<div style={{ marginTop: 16 }}>
					<RadioGroup defaultValue="a" size="small">
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
