import React, { Component } from 'react';
import { colorPicker} from 'quant-ui';
let { SliderPicker } = colorPicker;
class Detail extends Component {
	onChange = (color, event) =>{
		console.log(color, event)
	}
	render() {
		return (
			<SliderPicker onChange = {this.onChange}/>
		);
	}
}
export default Detail;
