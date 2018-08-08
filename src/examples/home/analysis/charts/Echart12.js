import React, { Component } from "react";
import echarts from "echarts";


let option = {
    legend:{
        data:['邮件营销','联盟广告','视频广告']
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            animation: false
        }
    },
    toolbox: {
        feature: {
            dataZoom: {
                yAxisIndex: 'none'
            },
            restore: {},
            saveAsImage: {}
        }
    },
    axisPointer: {
        link: {xAxisIndex: 'all'}
    },
    dataZoom: [
        {
            type: 'slider',
            realtime: true,
            start: 10,
            end: 70,
            
        }
    ],
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis : [
        {
             type: 'category',
        boundaryGap: false,
        data: ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15']
        },
       
    ],
    yAxis: {
        type: 'value'
    },
    series : [
        
           {
            name:'邮件营销',
            type:'line',
            stack: '总量',
            data:[120, 32, 101, 134, 90, 230, 210,410, 90, 230,234, 90, 330,154, 190, ]
        },
        {
            name:'联盟广告',
            type:'line',
            stack: '总量',
            data:[220, 182, 91, 234, 90, 330, 310,190, 330, 410, 90, 230, 210,150, 232,]
        },
        {
            name:'视频广告',
            type:'line',
            stack: '总量',
            data:[150, 232, 51, 154, 190, 330, 410,90, 330, 310,120, 32,150, 232, 51,]
        },
        
    ]
};

class Echarts12 extends Component {
  componentDidMount = () => {
    let myChart = echarts.init(document.getElementById("echart12"));
    myChart.setOption(option);
  };

  render() {
    return <div id="echart12" style={{ height: 500, width: "100%" ,marginRight:10}} />;
  }
}

export default Echarts12;
