import React, { Component } from 'react';
import { Button, screenfull } from 'quant-ui';
import K_line_graph from '../../../charts/K_line_graph/Basic1/Detail.js'
class Detail extends Component {

	screenFullDom = () => {
		window.onresize = null;
		if (screenfull.enabled) {
			screenfull.request(this.refs.Kref);
		}
	}
	componentWillMount = () => {
		if (screenfull.enabled) {
			screenfull.on('change', () => {
				console.log('是否全屏?', screenfull.isFullscreen ? 'Yes' : 'No');
			});
		}
	}
	render() {
		return (
			<div>
				<h2>图表全屏</h2>
				<Button onClick={this.screenFullDom}>全屏</Button>
				<br /><br />
				<div ref='Kref'>
					<K_line_graph />
				</div>

			</div>

		);
	}
}
export default Detail;
