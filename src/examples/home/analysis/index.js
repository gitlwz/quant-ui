import React, { Component } from "react";
import "./index.less";

import {
    Row,
    Col,
    Icon,
    NumberInfo,
    utils,
    Card,
    Trend,
    Tooltip,
    Progress,
    Button
} from "quant-ui";
import Echarts1 from "./Echart1.js";
import Echarts2 from "./Echart2.js";
import Tab from "./tabPane1.js";
import Tab2 from "./tab2.js";
import Tab3 from "./tab3.js";
import Tab4 from "./tab4.js";
//import { Button } from "antd/lib/radio";
const { currency } = utils;

const dataSource = [
    {
        title: (
            <div>
                <NumberInfo
                    subTitle={<span>总销售额</span>}
                    total={currency(7777777).format()}
                />
                <Trend flag="up">同周比 12%</Trend>
                <br />
                <Trend flag="down">日环比 11%</Trend>
            </div>
        ),
        footer: (
            <p>
                日均销售额 <span> {currency(777770).format()}</span>
            </p>
        )
    },
    {
        title: (
            <div>
                <NumberInfo subTitle="访问量" total={currency(8846).format()} />
                <Echarts1 />
            </div>
        ),
        footer: <p>日访问量 1234</p>
    },
    {
        title: (
            <div>
                <NumberInfo subTitle="支付笔数" total={currency(6560).format()} />
                <Echarts2 />
            </div>
        ),
        footer: <p>转化率 60%</p>
    },
    {
        title: (
            <div>
                <NumberInfo subTitle="运营活动效果" total="78%" />
                <Progress percent={78} />
            </div>
        ),
        footer: (
            <div>
                <Trend flag="up">同周比 12%</Trend>&nbsp;&nbsp;
        <Trend flag="down">日环比 11%</Trend>
            </div>
        )
    }
];

class App extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <Row
                    gutter={16}
                    type="flex"
                    justify="space-between"
                    style={{ margin: 20 }}
                >
                    {dataSource.map(element => (
                        <Col xs={24} sm={12} lg={12} xl={6}>
                            <Card
                                title={element.title}
                                extra={
                                    <Tooltip title="指标说明">
                                        <Icon type="info-circle" />
                                    </Tooltip>
                                }
                            >
                                {element.footer}
                            </Card>
                        </Col>
                    ))}
                </Row>

                <Row
                    gutter={16}
                    type="flex"
                    justify="space-between"
                    style={{ margin: 20 }}
                >
                    <Col span={24}>
                        <Card>
                            <Tab />
                        </Card>
                    </Col>
                </Row>

                <Row
                    gutter={16}
                    type="flex"
                    justify="space-between"
                    style={{ margin: 20 }}
                >
                    <Col lg={24} xl={12}>
                        <Tab2 />
                    </Col>
                    <Col lg={24} xl={12}>
                        <Tab3 />
                    </Col>
                </Row>

                <Row
                    gutter={16}
                    type="flex"
                    justify="space-between"
                    style={{ margin: 20 }}
                >
                    <Col span={24}>
                        <Card>
                            <Tab4 />
                        </Card>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default App;
