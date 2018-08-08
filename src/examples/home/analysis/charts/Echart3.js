import React, { Component } from "react";
import echarts from "echarts";

const option = {
  title: {
    text: "销售量趋势"
  },
  color: ["#3398DB"],
  tooltip: {
    trigger: "axis"
  },
  xAxis: {
    type: "category",
    data: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug"]
  },
  yAxis: {
    type: "value",
    inverse: false
  },
  series: [
    {
      name: "直接访问",
      type: "bar",
      barWidth: "60%",
      data: [110, 512, 200, 334, 390, 330, 220, 1000]
    }
  ]
};
class Echarts3 extends Component {
  componentDidMount = () => {
    let myChart = echarts.init(document.getElementById("echart3"));
    myChart.setOption(option);
  };

  render() {
    return (
      <div
        id="echart3"
        style={{
          height: 500,
          width: "100%",
          marginBottom: -20
        }}
      />
    );
  }
}

export default Echarts3;
