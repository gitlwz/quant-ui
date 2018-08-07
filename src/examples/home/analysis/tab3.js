import React, { Component } from "react";
import { Card, Popover, Icon, Button ,Tabs} from "quant-ui";
import Echarts7 from "./Echart7";
import Echarts8 from "./Echart8";

const TabPane=Tabs.TabPane;
const content = (
  <div>
    <p>操作一</p>
    <p>操作二</p>
  </div>
);
const tabList=[
    {
        key:'t1',
        tab:'tab1'
    },{
        key:'t2',
        tab:'tab2'
    }
];
const contentList={
    t1:<Echarts7 />,
    t2:<Echarts8 />,
}
class Tab3 extends Component {
    state={
        key:'t1'
    }
    onTabChange=(key)=>{
        this.setState({key});
    }
  render() {
    return (
      <Card
        title="占比"
        tabList={tabList}
        extra={
          <Popover content={content}>
            <Icon type="ellipsis" />
          </Popover>
        }
        onTabChange={key=>this.onTabChange(key)}
      >
      {contentList[this.state.key]}
        
      </Card>
    );
  }
}

export default Tab3;
