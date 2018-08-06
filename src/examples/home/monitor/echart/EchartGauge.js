import React, { Component } from 'react';
import echarts from 'echarts';



let option = option = {
    tooltip : {
        formatter: "{a} <br/>{b} : {c}%"
    },
    series: [
        {
            name: '业务指标',
            type: 'gauge',
            detail: {
                formatter:'{value}%',
                fontSize:12
            },
            data: [{
                value: 87, 
                name: '跳出率',
                textStyle:{
                    fontSize:10
                }
            }],
            axisLine:{
                lineStyle:{
                    width:10
                }
            },
            splitLine:{
                length:10
            },
            axisTick:{
                show:false
            },
            axisLabel: {           // 坐标轴文本标签，详见axis.axisLabel
                show: true,
                formatter: function(v){
                    console.log(v)
                    switch (v){
                        case 20: return '差';
                        case 40: return '中';
                        case 60: return '良';
                        case 80: return '优';
                        default: return '';
                    }
                },
            },
        }
    ]
};

;



class Detail extends Component {
	componentDidMount = () =>{
        var myChart = echarts.init(document.getElementById('EchartsGauge_charts'));
		myChart.setOption(option);
        
	}
	render() {
		return (
			<div id="EchartsGauge_charts" style={{height: '200px', width: '100%'}}></div>
		);
	}
}
export default Detail;
