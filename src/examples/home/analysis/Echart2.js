import React, { Component } from "react";
import echarts from "echarts";

let option = {
  color: ["#3398DB"],
  tooltip: {
    trigger: "axis"
  },
  xAxis:{
      type: "category",
      data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      show: false
    },
  yAxis:{
      type: "value",
      show: false,
      inverse:false,
    },
  series: [
    {
      name: "直接访问",
      type: "bar",
      barWidth: "20%",
      data: [10, 52, 200, 334, 390, 330, 220]
    }
  ]
};

class Echarts2 extends Component {
  componentDidMount = () => {
    let myChart = echarts.init(document.getElementById("echart1"));
    myChart.setOption(option);
  };

  render() {
    return <div id="echart1" style={{ height: 70, width: "100%" ,marginBottom:-20}} />;
  }
}

export default Echarts2;
