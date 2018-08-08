import React, { Component } from "react";
import { Card, Popover, Icon, NumberInfo, Trend, utils, Table } from "quant-ui";
import Echarts6 from "./charts/Echart6";
import Echarts5 from "./charts/Echart5";

const { currency } = utils;
const content = (
    <div>
        <p>操作一</p>
        <p>操作二</p>
    </div>
);
const columns = [
    {
        title: "rank",
        dataIndex: "rank"
    },
    {
        title: "keyWord",
        dataIndex: "keyWord"
    },
    {
        title: "total",
        dataIndex: "total",
        defaultSortOrder: "descend",
        sorter: (a, b) => a.total - b.total
    },
    {
        title: "rate",
        dataIndex: "rate",
    }
];

const data = [
    {
        rank: 1,
        keyWord: "keyWord-0",
        total: 869,
        rate: <Trend flag="up">15%</Trend>
    },
    {
        rank: 11,
        keyWord: "keyWord-15",
        total: 869,
        rate: <Trend flag="up">80%</Trend>
    },
    {
        rank: 21,
        keyWord: "keyWord-6",
        total: 800,
        rate: <Trend flag="up">16%</Trend>
    },
    {
        rank: 17,
        keyWord: "keyWord-9",
        total: 715,
        rate: <Trend flag="up">15%</Trend>
    },
    {
        rank: 19,
        keyWord: "keyWord-7",
        total: 666,
        rate: <Trend flag="down">15%</Trend>
    },
    {
        rank: 19,
        keyWord: "keyWord-7",
        total: 444,
        rate: <Trend flag="down">15%</Trend>
    },
    {
        rank: 19,
        keyWord: "keyWord-7",
        total: 321,
        rate: <Trend flag="down">15%</Trend>
    },
    {
        rank: 19,
        keyWord: "keyWord-7",
        total: 869,
        rate: <Trend flag="down">15%</Trend>
    }
];
class Tab2 extends Component {
  render() {
    return (
      <Card
        style={{ paddingBottom: "2000px", marginBottom: "-2000px" }}
        title="热点"
        extra={
          <Popover content={content}>
            <Icon type="ellipsis" />
          </Popover>
        }
      >
        <div>
          <div style={{ width: "50%", float: "left" }}>
            <NumberInfo
              subTitle="搜索用户数"
              total={currency(123123).format()}
            />
            <Trend flag="up"> 17.1</Trend>
            <Echarts5 />
          </div>
          <div style={{ width: "50%", float: "right" }}>
            <NumberInfo subTitle="人均搜索次数" total="2.7" />
            <Trend flag="down"> 26.2</Trend>
            <Echarts6 />
          </div>
          <Table
            columns={columns}
            dataSource={data}
            Pagination={{ pageSize: 5 }}
            bordered
          />
        </div>
      </Card>
    );
  }
}

export default Tab2;
