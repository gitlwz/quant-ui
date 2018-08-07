import React, { Component } from 'react';
import echarts from 'echarts';


let option = {
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        bottom: 5,
        left:5,
        data: ['个人', '团队', '部门'],
        textStyle: {
            fontSize: 14
        },
    },
    radar: [
        {
            indicator: [
                { text: '引用', max: 100 },
                { text: '口碑', max: 100 },
                { text: '产量', max: 100 },
                { text: '贡献', max: 100 },
                { text: '热度', max: 100 },
            ],
            center: ['25%', '40%'],
            radius: 100
        },
    ],

    series: [
        {
            type: 'radar',
            tooltip: {
                trigger: 'item'
            },
            itemStyle: {normal: {areaStyle: {type: 'default'}}},
            data: [
                {
                    value: [60,73,85,40,20],
                    name:'个人'
                },
                {
                    value: [30,62,46,28,53],
                    name:'团队'
                },
                {
                    value: [45,67,37,47,28],
                    name:'部门'
                }
            ],
        }
    ]

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
