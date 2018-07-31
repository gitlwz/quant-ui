import React, { Component } from 'react';
import echarts from 'echarts';


let option = {
    title: {
        text: "仪表盘",
    },
    tooltip: {
        formatter: "{a} <br/>{b} : {c}%"     //a,b,c为默认参数
    },
    toolbox: {
        feature: {
            restore: {},
            saveAsImage: {}
        }
    },
    series: [
        {
            name: '业务指标',
            type: 'gauge',
            detail: { formatter: '{value}%' },
            data: [{ value: 50, name: '完成率' }],
        }
    ]

}

class Detail extends Component {
    componentDidMount = () => {
        var myChart = echarts.init(document.getElementById('line1_charts'));
        myChart.setOption(option);
        setInterval(function () {
            option.series[0].data[0].value = (Math.random() * 100).toFixed(2) - 0;
            myChart.setOption(option);
        }, 1000)
    }
    render() {
        return (
            <div id="line1_charts" style={{ width: '600px', height: '400px' }}></div>
        );
    }
}
export default Detail;
