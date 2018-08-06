import React, { Component } from 'react';
import echarts from 'echarts';


class Detail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: props.data,
            id:props.id
        }
        this.option = {
            backgroundColor: '#fff',
            title: {
                x: '2%',
                y: '2%',
                textStyle: {
                    fontWeight: 400,
                    fontSize: 16,
                    color: '#687284'
                },
            },
            tooltip: {
                trigger: 'item',
            },
            series: [{
                type: 'pie',
                radius: ['75%', '90%'],
                hoverAnimation: false,
                label: {
                    normal: {
                        position: 'center'
                    }
                },
                data: [{
                    value: this.state.data.value,
                    name: this.state.data.text,
                    itemStyle: {
                        normal: {
                            color: this.state.data.color,
                        },
                    },
                    label: {
                        normal: {
                            // formatter: '{d} %',
                            textStyle: {
                                fontSize: 16,
                                fontWeight: 600,
                                color: this.state.data.color,
                            }
                        }
                    }
                },
                {
                    value: 100 - this.state.data.value,
                    tooltip: {
                        show: false
                    },
                    itemStyle: {
                        normal: {
                            color: '#E0E3E9',
                        }
                    },
                    label: {
                        normal: {
                            formatter: this.state.data.value + '',
                            textStyle: {
                                fontSize: 14,
                                color: this.state.data.color
                            }
                        },
        
                    }
                }
                ]
            }]
        };
    }
    componentWillReceiveProps = (nextProps) => {
        this.setState({
            data:nextProps.data
        })
    };

    componentDidMount = () => {
        var myChart = echarts.init(document.getElementById(this.state.id));
        myChart.setOption(this.option);
    }
    render() {
        return (
            <div id={this.state.id} style={{ height: '200px', width: '100%' }}></div>
        );
    }
}
export default Detail;
