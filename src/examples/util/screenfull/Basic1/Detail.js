import React, { Component } from 'react';
import { Button,screenfull} from 'quant-ui';
class Detail extends Component {
	screenFull = () =>{
		if (screenfull.enabled) {
			screenfull.request();
		}
	}
	screenFullDom = () =>{
		window.onresize = null;
		if (screenfull.enabled) {
			screenfull.request(this.refs.img);
		}
	}
	render() {
		return (
			<div>
				<Button onClick={this.screenFull}>html全屏</Button>
				<br/><br/>
				
				<Button onClick={this.screenFullDom}>图片元素全屏</Button>
				<br/><br/>
				<img ref="img" src="https://picsum.photos/200/300/?random" />
			</div>
			
		);
	}
}
export default Detail;
