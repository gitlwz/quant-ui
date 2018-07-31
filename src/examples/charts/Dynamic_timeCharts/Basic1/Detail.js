import React, { Component } from 'react';
import echarts from 'echarts';
var data = [];
var now = +new Date(1997, 9, 3); // 初始化一个时间点
var oneDay = 24 * 3600 * 1000; //两个时间点之间的间隔 一天
var value = Math.random() * 1000; //初始时间点，大于100小于1000
function makedata() {
    now = new Date(+now + oneDay);     //下一个时间点
    value = value + Math.random() * 21 - 10;   //随机值
    return {
        name: now.toString(),
        value: [
            [now.getFullYear(), now.getMonth() + 1, now.getDate()].join('/'),
            Math.round(value)
        ]
    }
}
for (let i = 0; i < 1000; i++) {
    data.push(makedata());
}
let option = {
    title: {
        text: '动态数据+时间坐标轴'
    },
    tooltip: {
        trigger: 'axis',
        //定义tip的显示样式
        formatter: function (params) {
            params = params[0];
            var date = new Date(params.name);
            return date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear() + ' : ' + params.value[1];
        },
        axisPointer: {   //坐标轴触发
            animation: false
        }
    },
    xAxis: {
        type: 'time'
    },
    yAxis: {
        type: 'value',
        boundaryGap: [0, 1],   //坐标轴最值上下的扩展空间
        splitLine: true,     //坐标轴切分显示
    },
    series: [{
        type: 'line',
        showSymbol: false,
        data: data,
    }],

}


class Detail extends Component {
    componentDidMount = () => {
        var myChart = echarts.init(document.getElementById('line1_charts'));
        myChart.setOption(option);
        //刷新图标
        setInterval(function () {

            for (var i = 0; i < 5; i++) {
                data.shift();
                data.push(makedata());
            }

            myChart.setOption({
                series: [{
                    data: data
                }]
            });
        }, 1000);
    }


    render() {
        return (
            <div id="line1_charts" style={{ width: '600px', height: '400px' }}></div>
        );
    }
}
export default Detail;
