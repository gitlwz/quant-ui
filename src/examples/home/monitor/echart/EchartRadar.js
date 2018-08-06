import React, { Component } from 'react';
import echarts from 'echarts';


class Detail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id:props.id
        }
        this.option = {
            tooltip: {},
            legend: {
                data: ['预算', '实际开销'],
                left:'left'
            },
            radar: {
                // shape: 'circle',
                name: {
                    textStyle: {
                        color: '#fff',
                        backgroundColor: '#999',
                        borderRadius: 3,
                        padding: [3, 5]
                   }
                },
                indicator: [
                   { name: '销售', max: 6500},
                   { name: '管理', max: 16000},
                   { name: '信息技术', max: 30000},
                   { name: '客服', max: 38000},
                   { name: '研发', max: 52000},
                   { name: '市场', max: 25000}
                ]
            },
            series: [{
                type: 'radar',
                data : [
                    {
                        value : [4300, 10000, 28000, 35000, 50000, 19000],
                        name : '预算'
                    },
                     {
                        value : [5000, 14000, 28000, 31000, 42000, 21000],
                        name : '实际开销'
                    }
                ]
            }]
        };
    }

    componentDidMount = () => {
        var myChart = echarts.init(document.getElementById(this.state.id));
        myChart.setOption(this.option);
    }
    render() {
        return (
            <div id={this.state.id} style={{ height: '250px', width: '100%' }}></div>
        );
    }
}
export default Detail;
