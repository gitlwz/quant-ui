import React, { Component } from 'react';
import { Card, Button, Tabs } from 'quant-ui';
import Api from '../../API.js';
import data from './api.js';
//基本
import Rate_basic from './rate_basic/Detail.js'
import Rate_basicCode from './rate_basic/code.js'
//半星
import Rate_half from './rate_half/Detail.js'
import Rate_halfCode from './rate_half/code.js'
//文案展示
import Rate_writing from './rate_writing/Detail.js'
import Rate_writingCode from './rate_writing/code.js'
//只读
import Rate_readOnly from './rate_readOnly/Detail.js'
import Rate_readOnlyCode from './rate_readOnly/code.js'
//清除
import Rate_clear from './rate_clear/Detail.js'
import Rate_clearCode from './rate_clear/code.js'
//其他字符
import Rate_others from './rate_others/Detail.js'
import Rate_othersCode from './rate_others/code.js'
import Code from '../../Code.js';
import Method from '../../METHOD.js';
import methodData from './method.js'
const TabPane = Tabs.TabPane;
class App extends Component {
    render() {
        return (
            <div style={{ padding: "20px" }}>
                <h1>Rate 评分</h1>
                <Tabs tabPosition={"right"}>
                    <TabPane tab="基本" key="1">
                        <Card >
                            <Rate_basic />
                        </Card>
                        <div style={{ marginTop: "30px" }}>
                            <Code data={Rate_basicCode} />
                        </div>
                    </TabPane>
                    <TabPane tab="半星" key="2">
                        <Card >
                            <Rate_half />
                        </Card>
                        <div style={{ marginTop: "30px" }}>
                            <Code data={Rate_halfCode} />
                        </div>
                    </TabPane>
                    <TabPane tab="文案展示" key="3">
                        <Card >
                            <Rate_writing />
                        </Card>
                        <div style={{ marginTop: "30px" }}>
                            <Code data={Rate_writingCode} />
                        </div>
                    </TabPane>
                    <TabPane tab="只读" key="4">
                        <Card >
                            <Rate_readOnly />
                        </Card>
                        <div style={{ marginTop: "30px" }}>
                            <Code data={Rate_readOnlyCode} />
                        </div>
                    </TabPane>
                    <TabPane tab="清除" key="5">
                        <Card >
                            <Rate_clear />
                        </Card>
                        <div style={{ marginTop: "30px" }}>
                            <Code data={Rate_clearCode} />
                        </div>
                    </TabPane>
                    <TabPane tab="其他字符" key="6">
                        <Card >
                            <Rate_others />
                        </Card>
                        <div style={{ marginTop: "30px" }}>
                            <Code data={Rate_othersCode} />
                        </div>
                    </TabPane>
                    <TabPane tab="参数api" key="7">
                        <Api data={data} />
                    </TabPane>
                    <TabPane tab="方法" key="8">
                        <Method data={methodData} />
                    </TabPane>
                </Tabs>

            </div>
        );
    }
}

export default App;
