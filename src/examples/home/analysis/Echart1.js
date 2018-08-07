import React, { Component } from "react";
import echarts from "echarts";

const data = [0, 4, 6, 2, 5, 0];
let option = {
  tooltip: {
    trigger: "axis",
    axisPointer: {
      //type: "cross",
      label: {
        show: true,
        //backgroundColor: "#6a7985"
      },
      snap:true,
    }
  },
  xAxis: {
    type: "category",
    show: false,
    data: [
      "2018-07-01",
      "2018-07-02",
      "2018-07-04",
      "2018-07-06",
      "2018-07-08",
      "2018-07-09"
    ]
  },
  yAxis: {
    type: "value",
    show: false
  },
  series: [
    {
      data: data,
      type: "line",
      smooth: true,
      areaStyle: {}
    }
  ],

};

class Echarts1 extends Component {
  componentDidMount = () => {
    let myChart = echarts.init(document.getElementById("echart2"));
    myChart.setOption(option);
  };

  render() {
    return <div id="echart2" style={{ height: 70, width: "100%" ,marginBottom:-20}} />;
  }
}

export default Echarts1;
