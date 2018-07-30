import React, { Component } from 'react';
import { Card, Button, Tabs } from 'quant-ui';
import Api from '../../API.js';
import data from './api.js';

import Basic from './Basic/Detail'
import BasicCode from './Basic/code'
import TMB from './TMB/Detail'
import TMBCode from './TMB/code'
import TS from './TS/Detail'
import TSCode from './TS/code'
import TCS from './TCS/Detail'
import TCSCode from './TCS/code'

import Code from '../../Code.js';
const TabPane = Tabs.TabPane;
class App extends Component {
    render() {
        return (
            <div style={{ padding: "20px" }}>
                <h1>Layout布局</h1>
                <Tabs tabPosition={"right"}>
                    <TabPane tab="基本" key="1">
                        <Card >
                            <Basic />
                        </Card>
                        <div style={{ marginTop: "30px" }}>
                            <Code data={BasicCode} />
                        </div>
                    </TabPane>
                    <TabPane tab="上中下布局" key="2">
                        <Card >
                            <TMB />
                        </Card>
                        <div style={{ marginTop: "30px" }}>
                            <Code data={TMBCode} />
                        </div>
                    </TabPane>
                    <TabPane tab="顶部-侧边布局-通栏" key="3">
                        <Card >
                            <TS />
                        </Card>
                        <div style={{ marginTop: "30px" }}>
                            <Code data={TSCode} />
                        </div>
                    </TabPane>
                    <TabPane tab="顶部-侧边布局" key="4">
                        <Card >
                            <TCS />
                        </Card>
                        <div style={{ marginTop: "30px" }}>
                            <Code data={TCSCode} />
                        </div>
                    </TabPane>
                    <TabPane tab="参数api" key="16">
                        <Api data={data} />
                    </TabPane>
                </Tabs>

            </div>
        );
    }
}

export default App;
