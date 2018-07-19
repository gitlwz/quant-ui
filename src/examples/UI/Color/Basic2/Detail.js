import React, { Component } from 'react';
import { colorPicker} from 'quant-ui';
let { PhotoshopPicker } = colorPicker;
class Detail extends Component {
	onChange = (color, event) =>{
		console.log(color, event)
	}
	render() {
		return (
			<PhotoshopPicker onChange = {this.onChange}/>
		);
	}
}
export default Detail;
