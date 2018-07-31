import React, { Component } from 'react';
import echarts from 'echarts';
let option = {
    backgroundColor: "#2c343c",
    title: {
        text: '南丁格尔图'
    },

    series: [{

        name: "访问来源",
        radius: '55%',
        type: 'pie',
        showSymbol: false,
        data: [
            { value: 235, name: '视频广告' },
            { value: 274, name: '联盟广告' },
            { value: 310, name: '邮件营销' },
            { value: 335, name: '直接访问' },
            { value: 400, name: '搜索引擎' }
        ],
        roseType: 'angle',  //南丁格尔图属性
        label: {
            normal: {
                textStyle: {
                    color: 'rgba(255, 255, 255, 0.3)',
                }
            }
        },
        labelLine: {
            normal: {
                lineStyle: {
                    color: 'rgba(255, 255, 255, 0.3)'
                }
            }
        },
        itemStyle: {
            normal: {
                color: '#c23531',
                shadowBlur: 200,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
        }
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
