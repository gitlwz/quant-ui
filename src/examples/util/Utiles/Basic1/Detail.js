import React, { Component } from 'react';
import {theme, Button} from 'quant-ui';
const {getCurrentColor,refreshColor,setCurrentColor} = theme;
class Detail extends Component {
	redClick = () =>{
		setCurrentColor('red')
		refreshColor()
	}
	greenClick = () => {
		setCurrentColor('green')
		refreshColor()
	}
	purpleClick = () =>{
		setCurrentColor('purple')
		refreshColor()
	}
	render() {
		return (
			<div>
				<h2>当前字体颜色{getCurrentColor()}</h2>
				<Button onClick={this.redClick}>红色</Button>
				<Button onClick={this.greenClick}>绿色</Button>
				<Button onClick={this.purpleClick}>紫色</Button>
			</div>
		);
	}
}
export default Detail;
