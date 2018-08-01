import React, { Component } from 'react';
import { Button,screenfull} from 'quant-ui';
class Detail extends Component {
	
	screenFull = (event) =>{
		window.onresize = null;
		if (screenfull.enabled) {
			screenfull.toggle(event.target);
		}
	}
	componentWillMount = () =>{
		if (screenfull.enabled) {
            screenfull.on('change', () => {
                console.log('是否全屏?', screenfull.isFullscreen ? 'Yes' : 'No');
            });
        }
	}
	render() {
		return (
			<div>
				<h2>点击图片切换全屏</h2>
				<img onClick={this.screenFull} src="https://picsum.photos/200/300/?random" />
			</div>
			
		);
	}
}
export default Detail;
