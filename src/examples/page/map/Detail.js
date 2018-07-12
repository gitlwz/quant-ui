import React, { Component } from 'react';
import { ReactQMap } from 'quant-ui';
import img from './imgs/spot_location.png'
class NotFoundCode extends Component {
	getContianer = dom => {
		if(!dom) return;
		const middleControl = document.createElement('div');
		middleControl.style.cssText = 'width: 22px;height: 30px;position: absolute;left: 50%;top: 50%;z-index: 999;margin-left: -23px;margin-top: -23px;';
		middleControl.innerHTML = "<img src="+img+" style='width: 100%;height: 100%;' />";
		dom.appendChild(middleControl);
	}
	getMap = (map,map2) =>{
		console.log("地图对象！",map)
	}
	render() {
		return (
			<div>
				<div style={{height:"500px"}}>
					<ReactQMap
						center={{latitude: 30.53786, longitude: 104.07265}} 
						initialOptions={{zoomControl: true, mapTypeControl: true}} 
						apiKey="UN6BZ-MP2W6-XWCSX-M2ATU-QORGZ-OWFOE"
						style={{height: 500}}
						mySpot={{latitude: 30.53786, longitude: 104.07265}}
						getMap={this.getMap}
						getContainer={this.getContianer}
					/>
				</div>
			</div>
		);
	}
}

export default NotFoundCode;
