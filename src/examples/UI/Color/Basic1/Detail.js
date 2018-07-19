import React, { Component } from 'react';
import { colorPicker} from 'quant-ui';
let { SketchPicker } = colorPicker;
class Detail extends Component {
	onChange = (color, event) =>{
		console.log(color, event)
	}
	render() {
		return (
			<SketchPicker onChange = {this.onChange}/>
		);
	}
}
export default Detail;
