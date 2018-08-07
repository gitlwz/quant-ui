import React, { Component } from 'react';
import echarts from 'echarts';


class Detail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id:props.id
        }
        this.option = {
            tooltip : {
                trigger: 'item',
                formatter: "{a} <br/>{b} : {c} ({d}%)"
            },
            series : [
                {
                    name: '访问来源',
                    type: 'pie',
                    radius : '55%',
                    center: ['50%', '60%'],
                    data:[
                        {value:335, name:'直接访问'},
                        {value:310, name:'邮件营销'},
                        {value:234, name:'联盟广告'},
                        {value:135, name:'视频广告'},
                        {value:1548, name:'搜索引擎'}
                    ],
                    itemStyle: {
                        emphasis: {
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        }
                    }
                }
            ]
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
