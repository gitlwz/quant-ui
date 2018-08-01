import React, { Component } from 'react';
import echarts from 'echarts';
let option = {
    title: {
        text: '散点图',
    },
    xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
        type: 'value'
    },
    series: [{
        type: 'bar',
        data: [120, 200, 150, 80, 70, 110, 130],
    }],

}


class Detail extends Component {
    componentDidMount = () => {
        var myChart = echarts.init(document.getElementById('line1_charts'));
        myChart.setOption(option);
    }
    render() {
        return (
            <div id="line1_charts" style={{ width: '600px', height: '400px' }}></div>
        );
    }
}
export default Detail;
