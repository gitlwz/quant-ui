import React, { Component } from 'react';
import { Card, Button, Tabs } from 'quant-ui';
import Api from '../../API.js';
import data from './api.js';

import Basic from './Basic/Detail'
import BasicCode from './Basic/code'
import Customize from './Customize/Detail'
import CustomizeCode from './Customize/code'

import Code from '../../Code.js';
const TabPane = Tabs.TabPane;
class App extends Component {
    render() {
        return (
            <div style={{ padding: "20px" }}>
                <h1>BackTop回到顶部</h1>
                <Tabs tabPosition={"right"}>
                    <TabPane tab="基本" key="1">
                        <Card >
                            <Basic />
                        </Card>
                        <div style={{ marginTop: "30px" }}>
                            <Code data={BasicCode} />
                        </div>
                    </TabPane>
                    
                    <TabPane tab="自定义样式" key="2">
                        <Card >
                            <Customize />
                        </Card>
                        <div style={{ marginTop: "30px" }}>
                            <Code data={CustomizeCode} />
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
