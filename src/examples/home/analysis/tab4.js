import React, { Component } from "react";
import {
  Card,
  Popover,
  Icon,
  Button,
  NumberInfo,
  Trend,
  utils,
  Table,
  Tabs,
  Progress
} from "quant-ui";
import Echarts9 from "./charts/Echart9";
import Echarts10 from "./charts/Echart10";
import Echarts11 from "./charts/Echart11";
import Echarts12 from "./charts/Echart12";
import Echarts13 from "./charts/Echart13";

const TabPane = Tabs.TabPane;

const dataSource = [
  {
    tab: (
      <div>
        <p style={{ fontSize: 20, marginBotton: 20 }}>tab1</p>
        <div style={{ overflow: "hidden", display: "inlineBlock" }}>
          <Progress type="circle" percent={80} width={40} strokeWidth="12" />
        </div>
      </div>
    ),
    key: "1",
    content: <Echarts9 />
  },
  {
    tab: (
      <div>
        <p style={{ fontSize: 20, marginBotton: 20 }}>tab2</p>
        <div style={{ overflow: "hidden", display: "inlineBlock" }}>
          <Progress type="circle" percent={30} width={40} strokeWidth="12" />
        </div>
      </div>
    ),
    key: "2",
    content: <Echarts10 />
  },
  {
    tab: (
      <div>
        <p style={{ fontSize: 20, marginBotton: 20 }}>tab3</p>
        <div style={{ overflow: "hidden", display: "inlineBlock" }}>
          <Progress type="circle" percent={60} width={40} strokeWidth="12" />
        </div>
      </div>
    ),
    key: "3",
    content: <Echarts11 />
  },
  {
    tab: (
      <div>
        <p style={{ fontSize: 20, marginBotton: 20 }}>tab4</p>
        <div style={{ overflow: "hidden", display: "inlineBlock" }}>
          <Progress type="circle" percent={77} width={40} strokeWidth="12" />
        </div>
      </div>
    ),
    key: "4",
    content: <Echarts12 />
  },
  {
    tab: (
      <div>
        <p style={{ fontSize: 20, marginBotton: 20 }}>tab5</p>
        <div style={{ overflow: "hidden", display: "inlineBlock" }}>
          <Progress type="circle" percent={88} width={40} strokeWidth="12" />
        </div>
      </div>
    ),
    key: "5",
    content: <Echarts13 />
  }
];
class Tab4 extends Component {
  render() {
    return (
      <Tabs>
        {dataSource.map(item => (
          <TabPane tab={item.tab} key={item.key}>
            {item.content}
          </TabPane>
        ))}
      </Tabs>
    );
  }
}

export default Tab4;
