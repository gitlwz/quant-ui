import React, { Component } from "react";
import {
  Radio,
  RangePicker,
  Tabs,
  DatePicker,
  List,
  Icon,
  utils
} from "quant-ui";
import Chart3 from "./charts/Echart3.js";
import Chart4 from "./charts/Echart4.js";

const TabPane = Tabs.TabPane;
const RadioGroup = Radio.Group;
const RadioButton = Radio.Button;
const ListItem = List.Item;
const { currency } = utils;
const data = [
  {
    icon: "smile-o",
    name: "工专路 0 号店",
    num: currency(323234).format()
  },
  {
    icon: "smile-o",
    name: "工专路 1 号店",
    num: currency(323234).format()
  },
  {
    icon: "smile-o",
    name: "工专路 2 号店",
    num: currency(323234).format()
  },
  {
    icon: "smile-o",
    name: "工专路 3 号店",
    num: currency(323234).format()
  },
  {
    icon: "smile-o",
    name: "工专路 4 号店",
    num: currency(323234).format()
  },
  {
    icon: "smile-o",
    name: "工专路 5 号店",
    num: currency(323234).format()
  },
  {
    icon: "smile-o",
    name: "工专路 6 号店",
    num: currency(323234).format()
  },
  {
    icon: "smile-o",
    name: "工专路 7 号店",
    num: currency(323234).format()
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
          <div style={{ float: "left", width: "30%" }}>
            <List
              header={
                <div>
                  <b>门店销售额排名</b>
                </div>
              }
              dataSource={data}
              split={false}
              style={{ width: "100%" }}
              renderItem={item => (
                <ListItem>
                  <List.Item.Meta
                    avatar={<Icon type={item.icon} />}
                    title={item.name}
                  />
                  <div>{item.num}</div>
                </ListItem>
              )}
            />
          </div>
        </TabPane>
        <TabPane tab="访问量" key="2">
          <div
            style={{
              width: "70%",
              float: "left"
            }}
          >
            <Chart4/>
          </div>
          <div style={{ float: "left", width: "30%" }}>
            <List
              header={
                <div>
                  <b>门店访问量排名</b>
                </div>
              }
              dataSource={data}
              split={false}
              style={{ width: "100%" }}
              renderItem={item => (
                <ListItem>
                  <List.Item.Meta
                    avatar={<Icon type={item.icon} />}
                    title={item.name}
                  />
                  <div>{item.num}</div>
                </ListItem>
              )}
            />
          </div>
        </TabPane>
      </Tabs>
    );
  }
}

export default ExtraContent;
