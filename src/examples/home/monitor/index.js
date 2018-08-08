import React, { Component } from 'react';
import { Row, Col, Card, utils, Icon, CountDown  } from "quant-ui"
import "./index.less";
import EchartsScatter from "./echart/EchartsScatter";
import EchartLine from "./echart/EchartLine";
import EchartGauge from "./echart/EchartGauge";
import EchartPie1 from "./echart/EchartPie1";
import EchartPie2 from "./echart/EchartPie2";
import EchartRadar from "./echart/EchartRadar";
import TitleText from "./component/TitleText";
const { currency } = utils;
const targetTime = new Date().getTime() + 3900000;
class App extends Component {
    constructor(props){
        super(props);
        this.data = {
            value: 24,
            text: '中式快餐',
            color: '#1890ff',
        };
        this.data2 = {
            value: 28,
            text: '西餐',
            color: '#00CED1',
        };
        this.data3 = {
            value: 33,
            text: '火锅',
            color: '#3CB371',
        };
    }
    render() {
        return (
            <div className="monitor">
                <Row gutter={10}>
                    <Col md={18}>
                        <Card className="cardDiv" title="实时活动交易情况">
                            <Row style={{marginBottom:10}} gutter={10}>
                                <Col md={6}>
                                    <TitleText title="今日交易总额" number={currency(12345678).format()} unit="元" />
                                </Col>
                                <Col md={6}>
                                    <TitleText title="销售目标完成率" number="92" unit="%" />
                                </Col>
                                <Col md={6}>
                                    <TitleText title="活动剩余时间" number={<CountDown target={targetTime} />}/>
                                </Col>
                                <Col md={6}>
                                    <TitleText title="每秒交易总额" number="234" unit="元" />
                                </Col>
                            </Row>
                            <EchartsScatter/>
                        </Card>
                    </Col>
                    <Col md={6}>
                        <Card className="cardDiv" title="活动情况预测">
                            <TitleText title="目标评估" number="有望达到预期"/>
                            <EchartLine/>
                        </Card>
                        <Card className="cardDiv" title="券核效率">
                            <EchartGauge/>
                        </Card>
                    </Col>
                </Row>
                <Row gutter={10}>
                    <Col md={12}>
                        <Card className="cardDiv" title="各品类占比">
                            <Row gutter={10}>
                                <Col md={8} style={{height:250}}>
                                    <EchartPie1 id="EchartPie1_charts" data = {this.data}/>
                                </Col>
                                <Col md={8} style={{height:250}}>
                                    <EchartPie1 id="EchartPie2_charts" data = {this.data2}/>
                                </Col>
                                <Col md={8} style={{height:250}}>
                                    <EchartPie1 id="EchartPie3_charts" data = {this.data3}/>
                                </Col>
                            </Row>
                        </Card>
                    </Col>
                    <Col md={6}>
                        <Card className="cardDiv" title="访问来源">
                            <EchartPie2 id="EchartPie32_charts"/>
                        </Card>
                    </Col>
                    <Col md={6}>
                        <Card className="cardDiv" title="资源分配">
                            <EchartRadar id="EchartRadar_charts" />
                        </Card>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default App;
