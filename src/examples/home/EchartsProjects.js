import React, { Component } from 'react';
import echarts from 'echarts';

var xAxisData = [];
var data = [];
for (var i = 0; i < 50; i++) {
    xAxisData.push(i);
    data.push((Math.sin(i / 5) * (i / 5 -10) + i / 6) * 5);
}

let option = {
    title: {
        text: '近50天项目完成情况',
        textStyle:{
            color:'#fff',
        }
    },
    backgroundColor: '#08263a',
    xAxis: [{
        show: false,
        data: xAxisData
    }, {
        show: false,
        data: xAxisData
    }],
    visualMap: {
        show: false,
        min: 0,
        max: 50,
        dimension: 0,
        inRange: {
            color: ['#4a657a', '#308e92', '#b1cfa5', '#f5d69f', '#f5898b', '#ef5055']
        }
    },
    yAxis: {
        axisLine: {
            show: false
        },
        axisLabel: {
            textStyle: {
                color: '#4a657a'
            }  
        },
        splitLine: {
            show: true,
            lineStyle: {
                color: '#08263f'
            }
        },
        axisTick: {
            show: false
        }
    },
    series: [{
        name: 'front',
        type: 'bar',
        data: data,
        xAxisIndex: 1,
        z: 3,
        itemStyle: {
            normal: {
                barBorderRadius: 5
            }
        }
    }],
    animationEasing: 'elasticOut',
    animationEasingUpdate: 'elasticOut',
    animationDelay: function (idx) {
        return idx * 20;
    },
    animationDelayUpdate: function (idx) {
        return idx * 20;
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
