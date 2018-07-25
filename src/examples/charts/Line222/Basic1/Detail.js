import React, { Component } from 'react';
import echarts from 'echarts';

const option = {
    xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
        type: 'value'
    },
    series: [{
        data: [820, 932, 901, 934, 1290, 1330, 1320],
        type: 'line'
    }]
};
class Detail extends Component {
	componentDidMount = () =>{
		var myChart = echarts.init(document.getElementById('line1_charts'));
		myChart.setOption(option);
	}
	render() {
		return (
			<div id="line1_charts" style={{width: '600px',height:'400px'}}></div>
		);
	}
}
export default Detail;
