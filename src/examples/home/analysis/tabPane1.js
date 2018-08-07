import React, { Component } from "react";
import { Radio, RangePicker, Tabs, DatePicker, List, Icon } from "quant-ui";
import Chart3 from "./Echart3.js";
const TabPane = Tabs.TabPane;
const RadioGroup = Radio.Group;
const RadioButton = Radio.Button;
const ListItem = List.Item;

const data = [
  {
    icon: "smile-o",
    des: "123"
    //<div>工专路 0 号店<div>323,234</div></div>,
  }
];
class ExtraContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "year"
    };
  }
  onChange = e => {
    this.setState({
      value: e.target.value
    });
  };
  handleChange = () => {
    const { value } = this.state;
  };
  render() {
    //const {value}=this.state;
    return (
      <Tabs
        defaultKey="1"
        tabBarExtraContent={
          <div>
            <RadioGroup onChange={this.onChange} value={this.state.value}>
              <RadioButton value="today" style={{ marginLeft: 10 }}>
                today
              </RadioButton>
              <RadioButton value="week" style={{ marginLeft: 10 }}>
                week
              </RadioButton>
              <RadioButton value="month" style={{ marginLeft: 10 }}>
                month
              </RadioButton>
              <RadioButton value="year" style={{ marginLeft: 10 }}>
                year
              </RadioButton>
            </RadioGroup>
            <DatePicker style={{ marginLeft: 10 }} />
          </div>
        }
      >
        <TabPane tab="销售额" key="1">
          <div
            style={{
              width: "70%",
              float: "left"
            }}
          >
            <Chart3 />
          </div>
          <div>
            {/* <List>
              <ListItem description="123">123</ListItem>
            </List> */}
            <List
              style={{ float: "right", display: "inlineBlock" }}
              dataSource={data}
              renderItem={item => (
                <ListItem>
                  <Icon type="smile-o" />
                  <ListItem.Meta
                    //   Avatar={<Icon type={item.icon} />}
                    description={item.des}
                  />
                </ListItem>
              )}
            />
          </div>
        </TabPane>
        <TabPane tab="访问量" key="2">
          12
        </TabPane>
      </Tabs>
    );
  }
}

export default ExtraContent;
