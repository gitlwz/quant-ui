import React, { Component } from 'react';
import echarts from 'echarts';

var xAxisData = [];
var data1 = [];
var data2 = [];
for (var i = 0; i < 50; i++) {
    xAxisData.push('项目' + i);
    data1.push((Math.sin(i / 5) * (i / 5 -10) + i / 6) * 5);
    data2.push((Math.cos(i / 5) * (i / 5 -10) + i / 6) * 5);
}
let option = {
    title: {
        text: '近50天项目完成情况'
    },
    legend: {
        data: ['bar', 'bar2'],
        align: 'left'
    },
    toolbox: {
        // y: 'bottom',
        feature: {
            magicType: {
                type: ['stack', 'tiled']
            },
            dataView: {},
            saveAsImage: {
                pixelRatio: 2
            }
        }
    },
    tooltip: {},
    xAxis: {
        data: xAxisData,
        silent: false,
        splitLine: {
            show: false
        }
    },
    yAxis: {
    },
    series: [{
        name: 'bar',
        type: 'bar',
        data: data1,
        animationDelay: function (idx) {
            return idx * 10;
        }
    }],
    animationEasing: 'elasticOut',
    animationDelayUpdate: function (idx) {
        return idx * 5;
    }
};



class Detail extends Component {
	componentDidMount = () =>{
        var myChart = echarts.init(document.getElementById('EchartsProjects_charts'));
		myChart.setOption(option);
        
	}
	render() {
		return (
			<div id="EchartsProjects_charts" style={{height: '233px', width: '100%'}}></div>
		);
	}
}
export default Detail;
