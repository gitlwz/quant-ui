import React, { Component } from 'react';
import echarts from 'echarts';



let option = {
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ["00:00","01:00","02:00","03:00","04:00",
        "05:00","06:00","07:00","08:00","09:00","10:00"
        ,"11:00","12:00","13:00","14:00","15:00","16:00"
        ,"17:00","18:00","19:00","20:00","21:00","22:00","23:00"],
        splitNumber:20,
        axisLine:{
            show:false
        },
        axisTick:{
            show:false
        }
    },
    tooltip : {
        trigger: 'axis',
        axisPointer: {
            label: {
                backgroundColor: '#6a7985'
            }
        }
    },
    yAxis: {
        type: 'value',
        show:false
    },
    series: [{
        data: [60, 100, 200, 230, 250, 280, 290,300, 310, 320, 315, 
        400, 420, 430,451, 460, 480, 500, 600, 640, 700,780, 800, 900, 1000, 1100, 1200],
        type: 'line',
        smooth: true,
        areaStyle: {},
        itemStyle: {
            normal: {
                color: "#1890ff"
            },
        },
        showSymbol: false,
    }]
};



class Detail extends Component {
	componentDidMount = () =>{
        var myChart = echarts.init(document.getElementById('EchartsLine_charts'));
		myChart.setOption(option);
        
	}
	render() {
		return (
			<div id="EchartsLine_charts" style={{height: '200px', width: '100%', marginBottom: -20,marginTop:-50}}></div>
		);
	}
}
export default Detail;
