import React, { Component } from "react";
import echarts from "echarts";

let option = {
  title: {
    text: "销售额1"
  },
  backgroundColor: "#fff",
  tooltip: {
    trigger: "item",
    formatter: "{a} <br/>{b}: {c} ({d}%)"
  },
  legend: {
    orient: "vertical",
    x: "right",
    data: ["直接访问", "邮件营销", "联盟广告", "视频广告", "搜索引擎"]
  },
  itemStyle: {
    borderWidth: 50,
    borderColor: "#fff"
  },
  series: [
    {
      name: "访问来源",
      type: "pie",
      radius: ["50%", "70%"],
      avoidLabelOverlap: false,
      label: {
        normal: {
          show: false,
          position: "center"
        },
        emphasis: {
          show: true,
          textStyle: {
            fontSize: "30",
            fontWeight: "bold"
          }
        }
      },
      labelLine: {
        normal: {
          show: false
        }
      },
      data: [
        { value: 335, name: "直接访问" },
        { value: 310, name: "邮件营销" },
        { value: 234, name: "联盟广告" },
        { value: 135, name: "视频广告" },
        { value: 1548, name: "搜索引擎" }
      ]
    }
  ]
};

class Echarts7 extends Component {
  componentDidMount = () => {
    let myChart = echarts.init(document.getElementById("echart7"));
    myChart.setOption(option);
  };

  render() {
    return (
      <div
        id="echart7"
        style={{ height: 720, width: "100%", marginBottom: -20 }}
      />
    );
  }
}

export default Echarts7;
